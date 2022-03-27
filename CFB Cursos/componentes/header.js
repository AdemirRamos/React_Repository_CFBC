import React from 'react'

//Cada componente só pode retorna uma "tag".

import SFTD from './Imagens/s.png'

export default function header() {
    return (
        <header>

            <img src={SFTD}/>
            <h1>CFB Cursos</h1>

        </header>
    )
}
