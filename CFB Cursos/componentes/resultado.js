import React from 'react'

export default function resultado(props) {
    return (
        <div>
        
            <p>Soma das notas: {props.somaDasNotas}</p>
            <p>{props.somaDasNotas >= 60? 'Aprovado' : 'Reprovado'}</p>

        </div>
    )
}
