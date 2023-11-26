import React, {useState} from 'react'
import About from "../Components/AboutSection"
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
 import HeroSection from '../Components/HeroSection';
 import Footer from '../Components/Footer';
 import Team from '../Components/Team';




const Home = () => {

   const [isconnected,setconnected]=useState(false)
  const[isOpen,setisOpen]=useState(false)
  const{ethereum}=window;
 
  const connectMetamask=async()=>{
    if(window.ethereum !== "undefined"){
      const account=await ethereum.request({method:"eth_requestAccounts"});
      setconnected(true)
      let aac=account[0]
      console.log(aac)
     
    }
  }
    const toggle=()=>{
        setisOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} isconnected={isconnected} connectMetamask={connectMetamask} />
        <Navbar toggle={toggle} isconnected={isconnected} connectMetamask={connectMetamask}/>
        <HeroSection />
        <About />
        <Team/>
        <Footer/>
        
 
    </>
  )
}

export default Home
