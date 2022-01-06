import { Button, Col, Form, Row } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Subcribtion.css";
const Subcribtion = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Shoping_qobo303",
        "template_b9z6r9i",
        form.current,
        "user_BvMDeFTlbwwZiqnYv0S8b"
      )
      .then(
        (result) => {
          if (result.text) {
            alert(
              "thank you so much for subscribe you will give notification update"
            );
          }
          //   console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="subscribe-section">
      <div className="container">
        <div className="subscribe">
          <h1>Our Special offer</h1>
          <Form ref={form} onSubmit={sendEmail}>
            <Row className="align-items-center w-75 text-center offer-section">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="email-desing">
                <Form.Control type="email" name="email" placeholder="Email" />
                <Button type="submit" className="mb-2 mr-3" value="Send">
                  Subscription
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Subcribtion;
