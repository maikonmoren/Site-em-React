import React from 'react';
import './mainSobre.css'
import IMG from './interface.png'
import Responsive from './responsive.png'



export default function MainSobre() {

  return (
    <div id='sobre' className='mainsobre'>
       <br></br>
        <div className='left-div'>
            <h1>Sobre nós</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;A Tecnup é uma empresa fundada por quatro pessoas e tem como objetivo principal trazer para as pessoas o software que eles desejam, tendo como um diferencial a criação de sistema customizáveis que se adapta a sua necessidade ou de sua empresa.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Contamos com uma equipe que presa pela qualidade de nossos produtos , garantindo funcionalidade e principalmente responsividade, para que o seu sistema possa ser exibido em diferentes dispositivos, como celulares, tablets entre outros </p>
            <hr></hr>
            <img src={IMG}></img>
        </div>
        <div className='right-div'>
          <center> <img src={Responsive} width='600px'></img></center> 
            <h1>Vantagem do sistemas</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Nosso sistema garante para sua empresa, ajuda na gestão auxiliando na tomada de decisões, armazenando e gerenciando informações. Além de realizar funcionalidades sob demanda do cliente, sendo assim nosso produto é adaptado para cada cliente para que atenda a necessidade do usuário.</p>
        </div>
    </div>
  );
}