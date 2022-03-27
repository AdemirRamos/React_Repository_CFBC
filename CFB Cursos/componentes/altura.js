import React from 'react'

export default function altura(props) {
    return(
        <div>

            <label>Altura: <input type='text' value={props.a} onChange={(e)=>{props.set_a(e.target.value)}}/></label>

        </div>
    )
}
