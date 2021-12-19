
import React, {useEffect} from'react'
import {Card,CardGroup,Button, Container} from 'react-bootstrap'
import Pong from '../../photos/ping-pong.png'
import Sweeper from '../../photos/minesweeper.png'
import Moon from '../../photos/MoonZillow.png'
import Aos from 'aos'
import './skills.css'

const Skills =()=>{

      useEffect(()=>{
        Aos.init({duration:2000})
      },[])



    return(
    <Container className="my-xl-5 bg-warning" fluid='md' data-aos="fade-right">
    <CardGroup className="skills-container">
      <Card>
        <Card.Img variant="top" src={Sweeper} />
        <Card.Body>
          <Card.Title>Minesweeper</Card.Title>
          <Card.Text className="skills-container">
          "Minesweeper is a single player puzzle game. 
          The Objective of the game is to clear a rectangular 
          board containing hidden mines without detonating any of them."
          </Card.Text>
          <Button href="https://github.com/yomoon93/MineSweeperFinal" target="_blank" variant="outline-warning">See More</Button>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={Pong} />
        <Card.Body>
          <Card.Title>Ping Pong</Card.Title>
          <Card.Text>
          "Ping Pong, a one player table tennis game against the computer created using logic"
          </Card.Text>
        <Button href="https://github.com/yomoon93/MOD1Project" target="_blank" variant="outline-warning">See More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Moon} />
        <Card.Body>
          <Card.Title>ZillowMoon</Card.Title>
          <Card.Text>
          "The website is a mock of zillow, which is a online real estate marketplace. 
          In this project i practice how to use an API and display info."
          </Card.Text>
          <Button href='https://moon-zillow.herokuapp.com/' target="_blank"   variant="outline-warning">See More</Button>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </Container>
    
    )
}
export default Skills