import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import SvgFileCreator from '../assets/images/svg-logo-creator.png';
import SocialNetworkApi from '../assets/images/social-network-api.png';
import JustAnotherTextEditor from '../assets/images/text-editor.png';
import EmployeePayrollTracker from '../assets/images/employee-payroll-tracker.png';

function Portfolio() {
  return (
    <>
      <Container>
        <Container className='projects'>
        <h1>Employee Payroll Tracker</h1>
        <Image src={EmployeePayrollTracker}></Image>
            <Container>
                <a href='https://github.com/HashemE1999/employee-payroll-tracker'>
                Click here to visit the GitHub repo!
                </a>
            </Container>
            <Container>
                <a href='https://hasheme1999.github.io/employee-payroll-tracker/'>
                Click here to see the deployed app!
                </a>
            </Container>
        <h1>SVG File Creator</h1>
        <Image src={SvgFileCreator}></Image>
            <Container>
                <a href='https://github.com/HashemE1999/svg-file-creator'>
                Click here to visit the GitHub repo!
                </a>
            </Container>
        <h1>Social Network API</h1>
        <Image src={SocialNetworkApi}></Image>
            <Container>
                <a href='https://github.com/HashemE1999/social-network-api'>
                Click here to visit the GitHub repo!
                </a>
            </Container>
        <h1>Just Another Text Editor</h1>
        <Image src={JustAnotherTextEditor}></Image>
            <Container>
                <a href='https://github.com/HashemE1999/text-editor'>
                Click here to visit the GitHub repo!
                </a>
            </Container>
            <Container>
                <a href='https://text-editor-1-8vuc.onrender.com/'>
                Click here to see the deployed app!
                </a>
            </Container>
        </Container>
      </Container>
    </>
  );
}

export default Portfolio;