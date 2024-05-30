import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
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
          <div className = "mt-20 flex flex-wrap  gap-1-">heyyy</div>
        </Container>
      </section>
    </>
  );
};

export default Features;
