import React from 'react'

export default class peso_class extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div>

                <label>Peso: <input type='text' value={this.props.p} onChange={(e)=>{this.props.set_p(e.target.value)}}/></label>

            </div>
        )
    }
}
