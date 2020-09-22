import React, { FormEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import { firestoreDB } from "../../lib/firestore";

import CustomCard from "../../components/card";
import CustomButton from "../../components/custom-button";
import { toast } from "react-toastify";

interface AboutFormProps {
  about: string;
  name: string;
  github: string;
  linkedin: string;
  email: string;
}

const HomePage: React.FC = () => {
  const formInit = {
    about: "",
    name: "",
    email: "",
    linkedin: "",
    github: "",
  };
  const [formData, setFormData] = useState<AboutFormProps>(formInit);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = firestoreDB
      .collection("about")
      .doc("Iqqt0Qvbi1XIgPz0DZUl")
      .onSnapshot((res) => {
        const response = res.data();
        if (response) {
          // console.log(response);

          setFormData({
            ...formData,
            about: response.about,
            name: response.name,
            email: response.email,
            linkedin: response.linkedin,
            github: response.github,
          });
        }
      });
    return () => unsubscribe();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAboutSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    firestoreDB
      .collection("about")
      .doc("Iqqt0Qvbi1XIgPz0DZUl")
      .set(formData)
      .then(() => {
        toast.success("About updated!");
        setLoading(false);
      })
      .catch(() => toast.error("Something wrong"));
  };

  return (
    <CustomCard colXs={12} colMd={6}>
      <Form onSubmit={handleAboutSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            disabled={formData.name === ""}
            required
            name="name"
            onChange={handleFieldChange}
            value={formData.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            disabled={formData.email === ""}
            required
            name="email"
            onChange={handleFieldChange}
            value={formData.email}
            type="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            disabled={formData.linkedin === ""}
            required
            name="linkedin"
            onChange={handleFieldChange}
            value={formData.linkedin}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>GitHub</Form.Label>
          <Form.Control
            disabled={formData.github === ""}
            required
            name="github"
            onChange={handleFieldChange}
            value={formData.github}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>About Me</Form.Label>
          <Form.Control
            disabled={formData.about === ""}
            required
            name="about"
            onChange={handleFieldChange}
            value={formData.about}
            as="textarea"
          />
        </Form.Group>
        <Form.Group>
          <CustomButton disabled={formData.about === ""} block loading={loading} type="submit">
            Submit Changes
          </CustomButton>
        </Form.Group>
      </Form>
    </CustomCard>
  );
};

export default HomePage;
