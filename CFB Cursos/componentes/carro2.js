import React from 'react'

//Ciclo de vida dos componentes - Aula 25.

class Carro extends React.Component {

    constructor(props) {
        super(props)
        this.modelo = 'Golf'
        
        this.state = {
            ligado: false,
            velocidade_atual: 0
        }
    }

    ligar_desligar() {
        //this.state.ligado = true

        //this.setState({ligado: true})

        //this.setState({ligado: !this.state.ligado})

        this.setState(
            (state) => (
                {ligado: !state.ligado}
            )
        )
            
        /*Trabalhando com componente funcional e função anônima tradicional:        

        this.setState(
            function(state) {
                return (
                    {ligado: !state.ligado}
                )
            }
        )*/
    }

    acelerar() {
        this.setState(
            (state, props) => (
                {velocidade_atual: state.velocidade_atual + props.fator}
            )
        )
    }

    componentDidMount() { //CDM: é chamdo (automaticamente) quando o componente é montado.
        console.log('O carro foi criado.')

        //CDM só é chamado após "render()" - independentemente de estar, aqui posicionado, antes de "render()".
    }

    componentDidUpdate() { //CDU: sempre será chamado quando o componente for atualizado.
        console.log('O carro foi atualizado.')

        //CDU também é chamado somente após "render()" - porém toda vez que o componente for atualizado.
    }

    componentWillUnmount() { //CWU: será chamado quando o componente for desmontado/removido.
        console.log('O carro foi removido.')
    }

    render() {

        return(

            <div>
            
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Estado: {this.state.ligado? 'Ligado' : 'Desligado'}</p>
                <p>Velocidade Atual: {this.state.velocidade_atual}</p>
                <button onClick={()=>ligar_desligar()}>{this.state.ligado? 'Desligar' : 'Ligar'}</button>

                <p>Conteúdo da aula 23:</p>

                <button onClick={()=>this.acelerar()}>Acelerar</button>

                <p>Fim do conteúdo da aula 23.</p>

            </div>
                        
        )
    }
}

export default Classe
