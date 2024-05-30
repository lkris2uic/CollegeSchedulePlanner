import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const imageUrls = [
  "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1517816428104-82f13d1b565a?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1494389945381-efdeeab9fcdd?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1508704019881-3c6b8c7d7a5a?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1491895200222-0fc4b9d7e564?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800"
];

const sampleImageUrl = "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800";

const squareSize = 300;  // Define the size for the square

const ImageCard = ({ src, alt }) => (
  <Card onClick= {() => console.log("Hitting this card")} sx={{ width: squareSize, height: squareSize, flexGrow: 1 }}>
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

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
        <img class="features-image"  src={sampleImageUrl} alt="" />
        <h1 className="tagline">Features</h1>
          <Col xs={12} md={6} xl={7}>
            <p>
              Say goodbye to the hassle of manually planning your semester! Our Automated Schedule Generation Tool is designed to streamline and
              personalize your course scheduling process. By leveraging advanced algorithms and optimization techniques, we create the best possible course schedules tailored to your unique
              preferences and academic goals.
            </p>
          </Col>
        </Row>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Semester-based Course Planning</h3>
              <a href=""></a>
              
            </VerticalTimelineElement >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Prerequisite Verification</h3>
              <a href=""></a>
              
            </VerticalTimelineElement >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Peer Connection</h3>
              <a href=""></a>
              
            </VerticalTimelineElement >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Automated Course Registration</h3>
              <a href=""></a>
              
            </VerticalTimelineElement >
          </VerticalTimeline>
          <h1 className="tagline">You're in good company</h1>
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

export default Features;
