import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomCard from "../../components/card";
import CustomButton from "../../components/custom-button";

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    about: "",
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <CustomCard col={6}>
      <Form>
        <Form.Group>
          <Form.Label>About Me</Form.Label>
          <Form.Control
            name="about"
            onChange={handleFieldChange}
            value={formData.about}
            as="textarea"
          />
        </Form.Group>
        <Form.Group>
          <CustomButton>Submit Changes</CustomButton>
        </Form.Group>
      </Form>
    </CustomCard>
  );
};

export default HomePage;
