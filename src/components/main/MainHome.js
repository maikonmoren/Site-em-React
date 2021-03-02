import React from 'react';
import './mainHome.css'
import '../header/header.css'
import IMG from '../header/logo.png'


export default function MainHome() {

  return (
    <div id='home' className='mainhome'>
       <h1 className='titulo'>Tecnup</h1>
        <div className='home-info'>
            <h4>A Tecnologia para seu negócio<br/>da maneira que você precisa
            </h4>
            <button className='btn fourth'> Ver produtos </button>
        </div>
    </div>
  );
}