import React from 'react'

//Obtendo os filhos de um elemento:

export default function caixa(props) {
    return (

        <>

            <p>{props.site}</p>
            {props.children}
            {props.children[0]}
            {props.children[1]}

        </>

    )
}
