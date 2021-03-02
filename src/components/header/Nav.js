import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from './Logo'
import './header.css'
export default class Nav extends React.Component{
    render(){
        return(
        <div className="nav">
        <div className="espaco">
        <Logo/>
        </div>
        <AnchorLink href='#home'>Home</AnchorLink>
        <AnchorLink href='#sobre'>Sobre</AnchorLink>
        <AnchorLink href='#photo'>Sharas</AnchorLink>
        <AnchorLink href='#contato'>Contato</AnchorLink>
    </div>);
    }
}