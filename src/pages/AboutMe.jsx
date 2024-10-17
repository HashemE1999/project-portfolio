import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Picture from '../assets/images/selfie.jpg'

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col>
            <Image src={Picture} thumbnail />
        </Col>
        <Col>
            <p>What's good? My name's Hashem, but I go by Hash in most circles! I'm an aspiring software engineer who's currently enrolled in the Coding Bootcamp at UNC Chapel Hill. I enjoy working out, gaming, and spending time with my family and friends! Growing up, I've always been someone who likes to figure out how to make things work and has an eye for detail, and I think these traits make me a great candidate for this field! Let's make something great together!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;