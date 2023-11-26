import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,Navlogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink,NavText,NavLinkr} from "./NavbarElements";
import { animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle,connectMetamask,isconnected}) => {
   
    const togglehome=()=>{
        scroll.scrollToTop();
    }
  return (
    <>
    <Nav>
        <NavbarContainer>
        
            <Navlogo to='/' onClick={togglehome}>
                NinjaPunks
            </Navlogo>
            <MobileIcon onClick={toggle}>
                <FaBars />   
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about"  smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinkr to="/mint">Mint</NavLinkr>
                </NavItem>
                <NavItem>
                    <NavLinks to="team" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Team</NavLinks>
                </NavItem>
               
                <NavBtn>
                    {!isconnected? (<NavBtnLink onClick={connectMetamask}>Connect</NavBtnLink>):(<NavText>Connected</NavText>) 
                    }
                    
                </NavBtn>

            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
