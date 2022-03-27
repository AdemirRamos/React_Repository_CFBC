import React from 'react'

export default function notas(props) {
    return (
        <div>
        
            <legend>Informe a nota: {props.número}</legend>
            <input type="text" name={props.nome} value={props.nota} onChange={(e) => props.set_nota(e)}></input>

        </div>
    )
}
