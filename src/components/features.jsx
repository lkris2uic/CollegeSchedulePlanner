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


// const imageUrls = [
//   "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
//   "https://images.unsplash.com/photo-1517816428104-82f13d1b565a?auto=format&fit=crop&w=800",
//   "https://images.unsplash.com/photo-1494389945381-efdeeab9fcdd?auto=format&fit=crop&w=800",
//   "https://images.unsplash.com/photo-1508704019881-3c6b8c7d7a5a?auto=format&fit=crop&w=800",
//   "https://images.unsplash.com/photo-1491895200222-0fc4b9d7e564?auto=format&fit=crop&w=800",
//   "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800"
// ];

// const squareSize = 300;  // Define the size for the square

// const ImageCard = ({ src, alt }) => (
//   <Card sx={{ width: squareSize, height: squareSize, flexGrow: 1 }}>
//     <CardMedia
//       component="img"
//       image={src}
//       alt={alt}
//       sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//     />
//     <CardContent>
//       <Typography
//         variant="body1"
//         fontWeight="bold"
//         color="textPrimary"
//       >
//         Image
//       </Typography>
//     </CardContent>
//   </Card>
// );

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
            <Col xs={12} md={6} xl={7}>
              <h1 className="tagline">Features</h1>
              <p>
                Say goodbye to the hassle of manually planning your semester! Our Automated Schedule Generation Tool is designed to streamline and
                personalize your course scheduling process. By leveraging advanced algorithms and optimization techniques, we create the best possible course schedules tailored to your unique
                preferences and academic goals.
              </p>
            </Col>
          </Row>
          <Box component="div" sx={{ mt: 4 }}>
            <div className="carousel-container">
              <button onClick={handlePrev} className="carousel-button prev">‹</button>
              <div className="carousel">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="carousel-item"
                  >
                    <ImageCard src={imageUrls[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <button onClick={handleNext} className="carousel-button next">›</button>
            </div>
            <div className="carousel-dots">
              {imageUrls.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </Box>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <a href=""></a>
              
            </VerticalTimelineElement>
            {/* Add more VerticalTimelineElement components here */}
          </VerticalTimeline>
        </Container>
      </section>
    </>
  );
};

export default Features;
