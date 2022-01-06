import { Button, Col, Form, Row } from "react-bootstrap";
import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
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
              "successfully sended your email we will contact within 24 hours "
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
    <div>
      <div className="container">
        <div className="contact-form col-md-12 col-sm-12 col-lg-12 col-12">
          <div>
            <Form
              className="contact-form-design bg-light shadow-lg p-3 mb-5 bg-body rounded my-5"
              ref={form}
              onSubmit={sendEmail}
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="bg-transparent"
                    name="email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="bg-transparent"
                    name="name}"
                  />
                </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Your Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Subject"
                  className="bg-transparent"
                  name="subject"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Write your text</Form.Label>
                <textarea name="massage" form="usrform"></textarea>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
