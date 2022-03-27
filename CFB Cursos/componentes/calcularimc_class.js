import React from 'react'

export default class calcularimc_class extends React.Component {

    constructor() {
        super()
        this.calcular = this.calcular.bind(this)
    }

    calcular = () => {
        const r = this.props.p / (this.props.a * this.props.a)
        this.props.set_resultado(r)
        //console.log(r)
    }

    render() {
        return(
            <div>

                <button onClick={this.calcular()}>Calcular IMC</button>

            </div>
        )
    }
}
