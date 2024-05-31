import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  color: '#000',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#ddd',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col>
            <h1 className="tagline">Contact Us</h1>
            <p>We’d love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ margin: '20px 0' }}
                required
              />
            </Col>
            <Col md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ margin: '20px 0' }}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                sx={{ margin: '20px 0' }}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{ margin: '20px 0' }}
                required
              />
            </Col>
          </Row>
          <StyledButton variant="contained" color="primary" type="submit">
            Send Message
          </StyledButton>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
