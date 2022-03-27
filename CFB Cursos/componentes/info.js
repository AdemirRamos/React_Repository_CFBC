import React from 'react'
import Globais from './globais'

export default function info() {


  return (

    <>

      <p>{`Canal: ${Globais.canal}.`}</p>
      <p>{`Curso: ${Globais.curso}.`}</p>
      <p>{`Ano: ${Globais.ano}.`}</p>

      <hr/>

    </>

  )

}
