import React from 'react'
import axios from 'axios'

export default class lista_carros extends React.Component {
    
    state = {
        carros: []
    }

    componentDidMount() {
        axios.get('https://cfbcursosapireactexemplo1.ademirramos1.repl.co')
            
        .then(resposta => {
            const dados_carros = resposta.data
            this.setState({carros: dados_carros})
        })
    }

    render() {
        return(

            <div>

                {this.state.carros.map(
                    carros => <div key={carros.id}>{carros.id} - {carros.marca} - {carros.modelo}</div>
                )}

            </div>
    
        )
    }
}
