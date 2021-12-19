import React, {useEffect} from "react";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import { Container,Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './flipskill.css'
import Aos from "aos";
import "aos/dist/aos.css";


const Flipskills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <Container id='container' data-aos="fade-right" fluid="sm">
      <h1>Skills</h1>
      <Row id="contain">

     <Row className='justify-content-md-center'>
         <Col  xs lg={2}><AiIcons.AiFillHtml5 className="logo"/><h6>HTML</h6></Col>
         <Col  xs lg={2}><IoIcons.IoLogoCss3 className="logo"/><h6>Css</h6></Col>
         <Col  xs lg={2}><DiIcons.DiSass className="logo"/><h6>Sass</h6></Col>
     </Row>
     <Row className='justify-content-md-center'>
         <Col  xs lg={2}><SiIcons.SiJava className="logo"/><h6>Java</h6></Col>
         <Col  xs lg={2}><DiIcons.DiReact className="logo"/><h6>React</h6></Col>
         <Col  xs lg={2}><IoIcons.IoLogoJavascript className="logo"/><h6>JavaScript</h6></Col>
     </Row>
     <Row className='justify-content-md-center'>
         <Col  xs lg={2}><IoIcons.IoLogoNodejs className="logo"/><h6>Nodejs</h6></Col>
         <Col  xs lg={2}><SiIcons.SiMysql className="logo"/></Col>
         <Col  xs lg={2}><SiIcons.SiPostgresql className="logo"/><h6>PostGreSQL</h6></Col>
     </Row>  
     <Row className='justify-content-md-center'>
         <Col  xs lg={2}><IoIcons.IoLogoGithub className="logo"/><h6>GitHub</h6></Col>
         <Col  xs lg={2}><DiIcons.DiLinux className="logo"/><h6>Linux</h6></Col>
         <Col  xs lg={2}><SiIcons.SiSpringboot className="logo"/><h6>Springboot</h6></Col>
     </Row>  
      </Row>
  </Container>
  );
};
export default Flipskills