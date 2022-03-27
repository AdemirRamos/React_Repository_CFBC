import React from 'react'

//Permitindo que um componente receba dados:

//P. S.: Os atributos serão alocados em "App.js".
//P. S.: Os nomes dos atributos não precisam corresponder aos nomes dos elementos do componente que os recebem.
//P. S.: Porém, para que os atributos sejam passados para este componente, é preciso referenciar os seus nomes de atribuição.

let n1 = 10
let n2 = 5

export default function dados(props) {
    return (
        <section>

            <p>Canal: {props.canal}</p>
            <p>YouTube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <p>Função: {props.função()}</p>
            <p>{`A soma entre ${n1} + ${n2} é igual a: ${props.somar(n1, n2)}.`}</p>
        
        </section>
    )
}
