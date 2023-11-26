import React from 'react';
import "./footer.css"
import photo from "../../videos/logo.png";
import facebook from "../../images/social-media-icons/facebook.png";
import twitter from "../../images/social-media-icons/twitter.png";
import email from "../../images/social-media-icons/email.png";

//import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
//import { FooterContainer,FooterWrap,SocialMedia,SocialIcons,WebsiteRights,a,SocialMediaWrap,SocialLogo} from './footerElement';

 
const Footer=()=>{
  return(
  
<div className="footer">
          <hr />
           <h3><img className='logo' src={photo} alt='Akatsuki' ></img>Akatsuki</h3>
          <br/>
 
       <img className='facebook' src={facebook} alt="facebook"></img>
          <img className='twitter' src={twitter} alt="facebook"></img>
          <img className='twitter' src={email} alt="facebook"></img>
          <br/>
          <br/>
 
           <p>Akatsuki © 2022</p>
           <p>For educational purpose only</p>
           <p>Credits for images goes to respective owners</p>
           <br/>
           <br/>
           <hr />

</div>
  )
}

export default Footer;