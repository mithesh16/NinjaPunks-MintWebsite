import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SidebarMenu,SidebarLinkr,SideBtn,SideBtnLink,SideText,SideBtnWrapper} from './SidebarElements';

const Sidebar = ({isOpen,toggle,isconnected,connectMetamask}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to="/" onClick={toggle}  smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</SidebarLink>
        <SidebarLinkr to="/mint">Mint</SidebarLinkr>
        <SidebarLink to="/" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>Team</SidebarLink>
        </SidebarMenu>
      <SideBtnWrapper>
      <SideBtn>{!isconnected? (<SideBtnLink onClick={connectMetamask}>Connect</SideBtnLink>):(<SideText>Connected</SideText>)}         
        </SideBtn>
      </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;