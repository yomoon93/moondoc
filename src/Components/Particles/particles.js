import React from "react";
import "./particles.css";
import Particles from "react-particles-js";
import 'bootstrap/dist/css/bootstrap.min.css';




function ParticlesString() {
  return (
 
      <Particles
        style={{ position: "relative" }}
        height="95%"
        width="95%"
        className="particles"
        params={{
            particles: {
               
                color: {
                    value: "d2bf33",
                },
                shape: {
                    type:"triangle",
                },
                
                line_linked: {
                    color:"#ffd500",
                    enable:false,
                    
                },
            
                number: {
                    value: 150,
                },
                size: {
                    value: 2,
                },
              
            },
        }}
        />

   
  );
}
export default ParticlesString;
