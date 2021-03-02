import React from 'react'
import 'primeicons/primeicons.css'

export default class Andress extends React.Component{
    render(){
     return(
        <div className="address">
        <i className="pi pi-phone" style={{'fontSize': '1em'}}></i>
        <strong> (14) 99709-8617</strong><br/>
        <i className="pi pi-phone" style={{'fontSize': '1em'}}></i>
        <strong> (14) 99105-5385</strong><br/>
        
    </div>
     );
    }
}