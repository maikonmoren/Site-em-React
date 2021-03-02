import React from 'react'
import ImgLogo from "./logo.png";
export default class Logo extends React.Component{
    render(){
     return(
     <img className='logo' src={ImgLogo} width='50px'></img>);
    }
}