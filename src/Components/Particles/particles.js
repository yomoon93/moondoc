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
                    enable:false
                    
                },
            
                number: {
                    value: 160,
                },
                size: {
                    value: 3,
                },
                // background: {
                //     color: "#8bccf6",
                // },
            },
        }}
        />

   
  );
}
export default ParticlesString;
