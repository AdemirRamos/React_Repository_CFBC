import React from 'react'

//Aparentemente, chaves {} representam códigos em JS.

//Retorno da hora em formato de "string" (no corpo do documento).

export default function relógio() {

    return (
        <p>

            {new Date().toLocaleTimeString()}
        
        </p>
    )

}
