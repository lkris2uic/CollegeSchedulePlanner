import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const sampleImageUrl = "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800";

const squareSize = 300;  // Define the size for the square

const ImageCard = ({ src, alt }) => (
  <Card sx={{ width: squareSize, height: squareSize, flexGrow: 1 }}>
    <CardMedia
      component="img"
      image={src}
      alt={alt}
      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <CardContent>
      <Typography
        variant="body1"
        fontWeight="bold"
        color="textPrimary"
      >
        Image
      </Typography>
    </CardContent>
  </Card>
);

const Home = () => {
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <h1 className="tagline">Welcome to Your Personalized Academic Planner</h1>
              <p>
                Say goodbye to the hassle of manually planning your semester! Our Automated Schedule Generation Tool is designed to streamline and
                personalize your course scheduling process. By leveraging advanced algorithms and optimization techniques, we create the best possible course schedules tailored to your unique
                preferences and academic goals.
              </p>
              <button className="cta-button">Get Started Today!</button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <ImageCard src={sampleImageUrl} alt="Sample Image" />
            </Col>
          </Row>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Personalized Scheduling</h3>
              <p>Input your preferences and get a tailored course schedule.</p>
            </VerticalTimelineElement >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Seamless Integration</h3>
              <p>Sync with your calendar and university LMS for real-time updates.</p>
            </VerticalTimelineElement >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Collaborative Learning</h3>
              <p>Connect with peers and work on projects together.</p>
            </VerticalTimelineElement >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Pre-Internship Opportunities</h3>
              <p>Engage in pre-internship projects to secure paid internships.</p>
            </VerticalTimelineElement >
          </VerticalTimeline>

          <h1 className="tagline">You're in Good Company</h1>
          <p>
            Rest assured, your privacy is our paramount concern. Utilizing advanced security measures 
            like robust encryption and stringent access controls, we ensure the confidentiality of your personal information throughout the course planning journey. Compliant with strict privacy regulations and industry standards, your data is handled with the utmost care and integrity. Additionally, our platform seamlessly integrates with your university's systems and platforms, facilitating 
            effortless connectivity and synchronized data across multiple channels.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Home;
