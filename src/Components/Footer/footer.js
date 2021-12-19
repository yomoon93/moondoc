import React from "react";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from 'react-icons/si'
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className='container-footer'>
       <div className="little-footer">

          <AiIcons.AiOutlineGithub  id='logos' href="https://github.com/yomoon93" onClick={()=> window.open("https://github.com/yomoon93","_blank")}/>
       

      
      
          <AiIcons.AiOutlineLinkedin id='logos' onClick={()=> window.open("https://www.linkedin.com/in/kevinmunar/","_blank")}/>
       

     
         
          <AiIcons.AiOutlineTwitter id='logos' onClick={()=> window.open("https://twitter.com/MoonDoc7or","_blank")}/>
        
       
         
          <SiIcons.SiStackoverflow id='logos' onClick={()=> window.open("https://stackoverflow.com/users/17195453/moondoc?tab=profile","_blank")}/>
       
            
           <div className='copyright'>MoonDoc&#169; 2021-2022</div>
       </div>
      
       
         
      </div>
        

       
    </div>
  );
};
export default Footer;