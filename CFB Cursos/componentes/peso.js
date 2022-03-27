import React from 'react'

export default function peso(props) {
    return(
        <div>

            <label>Peso: <input type='text' value={props.p} onChange={(e)=>{props.set_p(e.target.value)}}/></label>

        </div>
    )
}
