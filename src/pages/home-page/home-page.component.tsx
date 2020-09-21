import React from "react";
import { Form } from "react-bootstrap";

import CustomCard from "../../components/card";

const HomePage: React.FC = () => {
  return (
    <CustomCard col={6}>
      <Form>
        <Form.Group>
          <Form.Label>About Me</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
      </Form>
    </CustomCard>
  );
};

export default HomePage;
