
import React,{useState} from 'react'
import "./hero.css"

import { HeroContainer,HeroContent, HeroH1, HeroP,ArrowForward,ArrowRight,HeroBtnWrapper,Button} from './HeroElements';
const HeroSection = () => {
  const [hover,sethover]=useState(false);
  const onHover=()=>{
    sethover(!hover);
  }
  return (
            <HeroContainer>
                <div className='bg'></div>
            <HeroContent>
              <HeroH1>
                Ninja Punks 
              </HeroH1>
              <HeroP>
                It is 2077 can the Ninjas save the dying shinobi world from robot destruction ? Mint Ninja Punks to find out.
              </HeroP>
              <HeroBtnWrapper>
                <Button to="/mint"  onMouseEnter={onHover} onMouseLeave={onHover}>Mint Now {hover? <ArrowForward />:<ArrowRight/>} </Button>
              </HeroBtnWrapper>
            </HeroContent>
            </HeroContainer>
            
    
  )
}

export default HeroSection
