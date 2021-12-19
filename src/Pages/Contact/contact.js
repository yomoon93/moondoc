import React,{useRef} from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

export const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
   
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mi0dswb",
        "template_mo3wwl8",
        e.target,
        "user_R2xWySIenZi2Qlt1fQKMi"
      )
      //form.current
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container className="mt-5 bg-warning" fluid style={{ backgroundColor: "grey" }}>
      <h1>Let's Talk</h1>
      <h3>Send me a Message</h3>

      <Form onSubmit={sendEmail} ref={form}> 
        <Row className="justify-content-md-center">
          <Col md={{ span: 3 }}>
            <Form.Group as={Row} className='mb-3' controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' type="name" placeholder="Enter Name" required/>
            </Form.Group>
          </Col>

          <Col md={{ span: 3 }}>
            <Form.Group as={Row}  className='mb-3' controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter Email" required/>
            </Form.Group>
          </Col>
          <Row className="justify-content-md-center">
              <Col  md={{ span: 6 }}>
            <Form.Group className='mb-3' controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name='message' required/>
            </Form.Group>
          </Col>
          </Row>

        
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
