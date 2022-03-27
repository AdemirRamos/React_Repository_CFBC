import React from 'react'

export default class altura_class extends React.Component {
    
    constructor() {
        super()
    }
 
    render() {
        return(
            <div>

                <label>Altura: <input type='text' value={this.props.a} onChange={(e)=>{this.props.set_a(e.target.value)}}/></label>

            </div>
        )
    }
}
