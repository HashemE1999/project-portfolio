import Container from 'react-bootstrap/Container';
import Pdf from '../assets/resume.pdf'

function Resume() {
  return (
    <Container>
      <a href={Pdf}>Click here to view my resume!</a>
    </Container>
  );
}

export default Resume;