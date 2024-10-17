import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import SvgFileCreator from '../assets/images/svg-logo-creator.png'

function Portfolio() {
  return (
    <>
      <Container>
        <Container className='projects'>
            <a href='#'>
                <h1>SVG File Creator</h1>
                <Image src={SvgFileCreator}></Image>
            </a>
        </Container>
      </Container>
    </>
  );
}

export default Portfolio;