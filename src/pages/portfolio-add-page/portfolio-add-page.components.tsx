import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { firebaseStorage, firestoreDB } from "../../lib/firestore";

import CustomCard from "../../components/card";
import CustomButton from "../../components/custom-button";

const PortfolioAddPage: React.FC = () => {
  const history = useHistory();

  const emptyForm = {
    name: "",
    url: "",
    description: "",
    role: "",
    libraryFramework: "",
    githubUrl: "",
    year: "",
    imageUrl: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [imageRaw, setImageRaw] = useState<File>();
  const [imageToBeDeleted, setImageToBeDeleted] = useState();
  const [currentImageUrl, setCurrentImageUrl] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const unsubscribe = firestoreDB
        .collection("portfolio")
        .doc(id)
        .onSnapshot((snapshot) => {
          const response = snapshot.data();
          if (response) {
            setFormData({
              name: response.name,
              url: response.url,
              description: response.description,
              role: response.role,
              libraryFramework: response.libraryFramework,
              githubUrl: response.githubUrl,
              year: response.year,
              imageUrl: response.imageUrl,
            });

            if (response.imageUrl) {
              setImageToBeDeleted(response.imageUrl);
            }

            firebaseStorage
              .ref(response.imageUrl)
              .getDownloadURL()
              .then((url) => setCurrentImageUrl(url));
          }
        });
      return () => unsubscribe();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageRaw(e.target.files[0]);
      setFormData({
        ...formData,
        imageUrl: `/images/${e.target.files[0]?.name}`,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    const pregeneratedId = firestoreDB.collection("portfolio").doc().id;

    await firestoreDB
      .collection("portfolio")
      .doc(id ? id : pregeneratedId)
      .set(formData)
      .then(() => {
        if (!id) {
          setFormData(emptyForm);
          history.push("/portfolio");
        }
      })
      .catch(() => toast.error("Something Wrong Happened"));

    if (imageRaw) {
      try {
        await firebaseStorage.ref(imageToBeDeleted).delete();
      } catch {}
      await firebaseStorage.ref(formData.imageUrl).put(imageRaw);
    }
    toast.success(`${id ? "Modified" : "Added"} Portfolio`);

    setLoading(false);
  };

  return (
    <CustomCard colXs={12} colMd={8}>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Type project name here"
                required
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control
                placeholder="Type url here"
                required
                value={formData.url}
                name="url"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control required value={formData.year} name="year" onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Github Repo URL</Form.Label>
              <Form.Control value={formData.githubUrl} name="githubUrl" onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                placeholder="Type role here"
                required
                value={formData.role}
                name="role"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Library / Framework</Form.Label>
              <Form.Control
                placeholder="Type programming language, framework, library, etc"
                required
                value={formData.libraryFramework}
                name="libraryFramework"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                placeholder="Type programming language, framework, library, etc"
                required
                name="imageFile"
                type="file"
                onChange={handleFileInput}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                required
                placeholder="Explain the story"
                value={formData.description}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="d-flex justify-content-center">
              <img src={currentImageUrl} alt="" width="50%"></img>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <CustomButton type="submit" loading={loading} block>
                {id ? "Modify" : "Add"}
              </CustomButton>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </CustomCard>
  );
};

export default PortfolioAddPage;
