import React,{useEffect} from "react";
import { Container,Col,Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './main.css'
import BabyPic from '../../photos/ComputerGuy.jpg';
import Aos from "aos";

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <Container className="my-5 " data-aos='flip-left'>
     
      <Col>
      
      <Image src={BabyPic}
      alt='BabyPic'
      width='400'
      height='400'
      fluid/>
      <Col>
      <h1>About Me</h1>
          <p className="bio"> I was born and raised in New York City. Being from the Big Apple, I’ve had to overcome many adversities in order to thrive as an individual. 
          I  am thankful for all the challenges this city has offered to me, despite the many times it felt as if I should give up. 
          The community I had growing up in Queens always influenced me. The friends and family I made there always supported me. 
          I hope to one day have an impact in my community through my work. <br/></p>
          <p className="bio">
          My passion for being a developer stems from studying for my degree in computer engineering. 
          If I had to choose one of the main sources that acted as a catalyst, then I would choose the understanding of electricity. 
          I found this beauty in the synthesis of numbers, and the effect it has on the physical world. 
          The idea that some zeros and ones can turn off and on light bulbs sounds so unbelievably simple, yet incredibly complex and this is one of the many reasons why I will always love code.<br/></p>
            <p className="bio">
            I pride myself in approaching problems in a creative way, and as a Full Stack Developer I try to bring that into my work. 
            I love to learn new techniques and experiment with my own creativity. 
            Whether it’s the understanding of overall design or the deeper analysis of the work at hand, my curiosity for code has made me the developer I am today. 
            My goal is to not only become the best that I can be, but to also help people look at code in different perspectives.

               </p>
      
      </Col>


      </Col>
      
    </Container>
  );
};
export default Main;







