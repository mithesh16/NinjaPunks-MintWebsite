import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,Navlogo,MobileIcon,NavMenu,NavLinks2,NavItem,NavBtn,NavBtnLink,NavText} from "./NavbarElements";
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
                    <NavLinks2 to="/#about"  smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        About</NavLinks2>
                </NavItem>       
                <NavItem>
                    <NavLinks2 to="/mint">Mint</NavLinks2>
                </NavItem>
                <NavItem>
                    <NavLinks2 to="/" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Team</NavLinks2>
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
