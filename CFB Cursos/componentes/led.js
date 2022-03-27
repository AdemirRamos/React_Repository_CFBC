import React from 'react'
import green_light from './Imagens/green.png'
import red_light from './Imagens/red.png'

export default function led(props) {

  return (
    <>

      <img style={{width: '50px', margin: '10px'}} src={props.ligado? green_light : red_light}/>
      
      <button
        
        style={{
        outline: '1px solid black',
        border: 'none',
        marginLeft: '15px',
        marginRight: '15px'}}
        onClick={()=>props.set_ligado(!props.ligado)}>
        {props.ligado? 'Desligar' : 'Ligar'}
        
      </button>
    
    </>
  )

}
