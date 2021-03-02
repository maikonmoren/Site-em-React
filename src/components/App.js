import React from 'react'
import Header from './Header'
import Main from './Main'

export default class App extends React.Component{
    render(){
        return(
            <div className="body">
                <Main/>
                <Header/>
                
             
            </div>
        )
    }
}