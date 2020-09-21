import React, { FormEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import { firestoreDB } from "../../lib/firestore";

import CustomCard from "../../components/card";
import CustomButton from "../../components/custom-button";
import { toast } from "react-toastify";

interface AboutFormProps {
  about: string;
}

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<AboutFormProps>({
    about: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    firestoreDB
      .collection("about")
      .doc("Iqqt0Qvbi1XIgPz0DZUl")
      .onSnapshot((res) => {
        const response = res.data();
        if (response) {
          setFormData({
            ...formData,
            about: response.about,
          });
        }
      });

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
      .set({
        about: formData.about,
      })
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
