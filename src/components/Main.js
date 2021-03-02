import React from 'react'
import Contact from './main/Contato'
import Map from './main/Map'
import MainHome from './main/MainHome'
import MainSobre from './main/MainSobre'

export default class Main extends React.Component{
    render(){
    return(
        <div className="main">
        <MainHome/>
        <MainSobre/>
        <Contact/>
        <Map/>
        </div>
    );
   
    }
}