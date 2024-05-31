import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import '../components/support.css'
const Support = () => {
  return (
    <section className="support" id="support">
      <Container>
        <Row>
          <Col>
            <h1 className="tagline">Support</h1>
            <p>We are here to help you. Find answers to common questions, browse through user guides, or contact our support team.</p>
          </Col>
        </Row>

        <Row className="search-bar">
          <Col xs={12}>
            <TextField 
              fullWidth 
              label="Search for help..." 
              variant="outlined" 
            />
          </Col>
        </Row>

        <Row className="faq-section">
          <Col>
            <h2 className="subheading">Frequently Asked Questions (FAQs)</h2>
            <List>
              <ListItem>
                <ListItemText primary="How do I create a schedule?" secondary="To create a schedule, click on 'Get Started' on the home page, and follow the instructions to input your preferences." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Can I modify my schedule after it's created?" secondary="Yes, you can modify your schedule by going to your dashboard and selecting 'Edit Schedule'." />
              </ListItem>
              <ListItem>
                <ListItemText primary="How do I connect with a study group?" secondary="Use the 'Connect' feature to find and join study groups based on your courses and interests." />
              </ListItem>
              <ListItem>
                <ListItemText primary="How do I access pre-internship projects?" secondary="Pre-internship projects can be accessed from your dashboard under the 'Internship Opportunities' section." />
              </ListItem>
            </List>
          </Col>
        </Row>

        <Row className="guides-section">
          <Col>
            <h2 className="subheading">User Guides and Documentation</h2>
            <List>
              <ListItem button component="a" href="/docs/user-guide">
                <ListItemText primary="User Guide" />
              </ListItem>
              <ListItem button component="a" href="/docs/faq">
                <ListItemText primary="FAQ" />
              </ListItem>
              <ListItem button component="a" href="/docs/tutorials">
                <ListItemText primary="Video Tutorials" />
              </ListItem>
            </List>
          </Col>
        </Row>

        <Row className="videos-section">
          <Col>
            <h2 className="subheading">Video Tutorials</h2>
            <p>Watch our step-by-step video tutorials to get the most out of the Automated Schedule Generation Tool.</p>
            {/* Example video embeds */}
            <div className="video-tutorial">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/samplevideo1" title="Video Tutorial 1" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="video-tutorial">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/samplevideo2" title="Video Tutorial 2" frameBorder="0" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>

        <Row className="contact-section">
          <Col>
            <h2 className="subheading">Contact Support</h2>
            <p>If you need further assistance, please reach out to our support team.</p>
            <Button variant="contained" color="primary" href="mailto:support@example.com">Contact Us</Button>
          </Col>
        </Row>

        <Row className="community-section">
          <Col>
            <h2 className="subheading">Community Forums</h2>
            <p>Join our community forums to ask questions, share insights, and connect with other users.</p>
            <Button variant="contained" color="primary" href="/community-forums">Visit Forums</Button>
          </Col>
        </Row>

        <Row className="feedback-section">
          <Col>
            <h2 className="subheading">Feedback</h2>
            <p>We value your feedback! Please let us know how we can improve our tool.</p>
            <TextField 
              fullWidth 
              label="Your Feedback" 
              multiline 
              rows={4} 
              variant="outlined" 
            />
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Submit Feedback</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Support;
