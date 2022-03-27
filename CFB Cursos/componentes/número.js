import React from 'react'

export default function número(props) {
    return (
        <>
        
        <p>Valor do "state" (em "número.js"): {props.número}.</p>
        <button onClick={() => props.set_number(props.número + 10)}>Somar 10.</button>
        
        </>
    )
}
