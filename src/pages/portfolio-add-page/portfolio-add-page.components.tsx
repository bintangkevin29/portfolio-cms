import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomCard from "../../components/card";
import CustomButton from "../../components/custom-button";
import { firestoreDB } from "../../lib/firestore";

const PortfolioAddPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    return firestoreDB
      .collection("portfolio")
      .doc()
      .set(formData)
      .then(() => {
        setLoading(false);
        setFormData({ name: "", url: "", description: "" });
        toast.success("Added Portfolio");
      })
      .catch(() => toast.error("Something Wrong Happened"));
  };

  return (
    <CustomCard colXs={12} colMd={6}>
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
            <Form.Group>
              <CustomButton type="submit" loading={loading} block>
                Submit
              </CustomButton>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </CustomCard>
  );
};

export default PortfolioAddPage;
