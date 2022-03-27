import React from 'react'

export default function calcularimc(props) {

    const calcular = () => {
        props.set_resultado(props.p / (props.a * props.a))
    }

    return(
        <div>

            <button onClick={calcular()}>Calcular IMC</button>

        </div>
    )
}
