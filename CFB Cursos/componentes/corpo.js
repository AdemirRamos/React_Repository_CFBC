import React from 'react'

//É possível ter componentes dentro de componentes:

import Dados from './dados'

export default function corpo() {

    const channel = ' Conteúdo de "channel": CFB Cursos.'
    const utube = ' Conteúdo de "utube": CFB Cursos.'
    const course = ' Conteúdo de "course": Curso de React.'

    const função = () => {
        return ' Texto da função.'
    }

    const somar = (n1, n2) => {
        return n1 + n2
    }

    return (
        <section>
        
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal.</p>
            <p>Ative o sininho e clique no joinha.</p>

            <Dados

                canal=' CFB'
                youtube=' Conteúdo de "utube": CFB Cursos.'
                curso=' React'
                canal_2={channel}
                youtube_2={utube}
                curso_2={course}
                função_texto={função}
                função_soma={somar}
            
            />

        </section>
    )
}
