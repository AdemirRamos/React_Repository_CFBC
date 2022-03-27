import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function lista_carros_funcional() {
    
    const [carros, set_carros] = useState([])

    useEffect(()=> {
        axios.get('https://cfbcursosapireactexemplo1.ademirramos1.repl.co')
            
        .then(resposta => {
            const dados_carros = resposta.data
            set_carros(dados_carros)
        })
    })
    
    return(

        <div>

            {carros.map(
                carros => <div key={carros.id}>{carros.id} - {carros.marca} - {carros.modelo}</div>
            )}

        </div>

    )
}
