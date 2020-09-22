import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { firebaseAuth } from "../../lib/firestore";

import CustomButton from "../../components/custom-button";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    await firebaseAuth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        toast.success("Welcome");
        history.push("/");
      })
      .catch((err) => toast.error(err.message));
    setLoading(false);
  };

  console.log(formData);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <Form onSubmit={handleSubmit} className="user">
                      <Form.Group>
                        <Form.Control
                          type="email"
                          required
                          className="form-control-user"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="password"
                          required
                          className="form-control-user"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <CustomButton loading={loading} type="submit" block className="btn-user">
                        Login
                      </CustomButton>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
