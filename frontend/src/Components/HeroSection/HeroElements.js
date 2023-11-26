import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward}from 'react-icons/md';
import {Link} from 'react-router-dom';

 
export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
background-image:url("../../videos/170955.jpg");
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg=styled.image`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`
export const HeroContent = styled.div`

max-width: 1200px; 
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items:center;
background:transparent;

`
export const HeroH1 = styled.h1`
color: #fff;
font-size: 40px;
font-weight:1000;
text-align: center;
background:transparent;

@media screen and (max-width: 768px) {
font-size: 30px;
}
@media screen and (max-width: 480x) {
    font-size:24px;}
`
export const HeroP = styled.p`
margin-top: 24px; 
color: #fff;
font-size: 20px;
text-align: center; 
background:transparent;
max-width:600px;
@media screen and (max-width: 768px) {
    font-size: 16px;
    }
    @media screen and (max-width: 480x) {
        font-size:12px;}

`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
 display: flex;
flex-direction: column;
align-items: center;
background:transparent;
`


export const Button=styled(Link)`
border-radius: 50px;
background: ${({ primary }) => (primary ?'#cf8442' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px' )};
color: ${({ dark }) => (dark ? '#010606' :'#cf8442' )};
font-size: ${({ fontBig }) => (fontBig? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
alian-items: center:
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#010606':'#cf8442')};
color: ${({ dark }) => (dark ? '#cf8442': '#010606' )};
}

`
export const ArrowForward = styled (MdArrowForward)`
margin-left: 8px;
background:transparent;
margin-top:1px;
font-size: 20px;
`
export const ArrowRight = styled (MdKeyboardArrowRight)`
margin-left: 8px;
margin-top:2px;
font-size: 20px;
background:transparent;
`
