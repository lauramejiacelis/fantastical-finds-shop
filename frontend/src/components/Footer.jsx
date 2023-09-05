import {Container, Row, Col} from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaReact} from 'react-icons/fa'

const Footer = () => {
  const currentYear= new Date().getFullYear();
  
  return(
    <footer>
      <Container>
        <div class="d-flex justify-content-between d-flex align-items-center">
          <div>
            Fantastical Finds built by Laura Mejia Celis &copy;  {currentYear}
          </div>
          
          <div className='fs-3 text'>
            <a className="link-dark link-opacity-25-hover p-2" href="https://github.com/lauramejiacelis/"><FaGithub/></a>
            <a className="link-dark link-opacity-25-hover p-2" href="https://www.linkedin.com/in/lauramejiacelis/"><FaLinkedin/></a>            
          </div>
        </div>
        
        <hr/>
        <Row>
          <Col className='text-center'>
            <p className='fs-6 text'>Made with <FaReact/> (React)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;