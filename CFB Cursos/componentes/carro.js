import React from 'react'

//Nota (aula 23): Por questões de desempenho, o React realiza a atualização de todos os "states" em uma única chamada.

//Nota (aula 23): O evento referido acima ocorre de maneira assincrona.

//Nota (aula 23): Em certos casos, isso pode gerar um erro ao se atualizar "states".

//Nota (aula 23): Para sanar esse problema, devemos criar um função que irá atualizar o "state".

//State em componentes de classe:

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
        //this.state.ligado = true -> Desta maneira, a atualização não será renderizada. Da maneira abaixo será:

        //this.setState({ligado: true}) -> Função somente para ligar. Função para ligar e desligar:

        //this.setState({ligado: !this.state.ligado})

        //Acima temos o conteúdo da aula 22; abaixo, o da aula 23.

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

        //Fim do conteúdo da aula 23.
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
