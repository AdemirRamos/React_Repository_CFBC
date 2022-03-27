import React from 'react'

//Como usar o método "bind" em React.

//"bind" é uma ligação que nos permite mudar o conceito do "this" de um determinado elemento.
//Uma nova função será criada e quando a nova função for chamada, o seu "this" será redefinido e apontará para um outro elemento.

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

        //Usando o "bind":

        this.ligação = this.ligar_desligar.bind(this)
    }

    ligar_desligar() {
        //this.state.ligado = true -> Desta maneira, a atualização não será renderizada. Da maneira abaixo será:

        //this.setState({ligado: true}) -> Função somente para ligar. Função para ligar e desligar:

        //this.setState({ligado: !this.state.ligado}) -> Também se pode usar somente essa linha com o "bind".

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

    //Aula 24: Agora usando "bind":

    render() {

        return(

            <div>
            
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Estado: {this.state.ligado? 'Ligado' : 'Desligado'}</p>
                <p>Velocidade Atual: {this.state.velocidade_atual}</p>
                <button onClick={this.ligação}>{this.state.ligado? 'Desligar' : 'Ligar'}</button>

                <p>Conteúdo da aula 23:</p>

                <button onClick={()=>this.acelerar()}>Acelerar</button>

                <p>Fim do conteúdo da aula 23.</p>

            </div>
                        
        )
    }
}

export default Classe
