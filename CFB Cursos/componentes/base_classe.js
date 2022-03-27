import React from "react";

export default class Base_classe extends React.Component{
    constructor(props) {
        
        //Habilitando o uso de "props":

        super(props)
        
        //"state":

        this.state = {
            canal: 'CFB Cursos',
            curso: 'Curso de React',
            ativo: true,
            nome: this.props.nome_aluno
        }
        this.status = this.props.status

        //"bindagem":

        let ad = ativar_desativar.bind(this)

        //Instruções do Construtor:
    }

    //Função para a manipulação de "state":

    ativar_desativar() {
        this.setState(
            state = (
                ativo = !state.ativo
            )
        )
    }

    componentDidMount() {
        console.log('O componente foi criado.')
    }

    componentDidUpdate() {
        console.log('O componente foi atualizado.')
    }

    componentWillUnmount() {
        console.log('O componente foi removido.')
    }

    render() {
        return (
            <>
            
                <h1>Componente de Classe</h1>

                {/*Chamada da função com "bind"*/}

                <button onClick={this.ad}>Ativar / Desativar</button>

                {/*Chamada da função sem "bind"*/}

                <button onClick={()=>this.ativar_desativar}>Ativar / Desativar</button>

            </>
        )
    }
}
