import React from 'react'

//Outra notação possível: "export default class Classe extends React.Component {}".

//Passando e/ou recebendo propriedades:

//O "super()" deve ser usado para que as propriedades, aqui modificadas, sejam passadas para a classe-pai a fim de se evitar erros.

//P. S.: Só se pode retornar um componente por vez. - O componente, porém, pode ter filhos.

class Classe extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(

            <div>
            
                <h1>Primeiro Componente de Classe</h1>
                <p>Canal: {this.props.canal}</p>
                <p>Curso: {this.props.curso}</p>

            </div>
                        
        )
    }
}

export default Classe
