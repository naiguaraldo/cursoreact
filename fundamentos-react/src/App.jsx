import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Valor from './Aleatorio'

export default () => (
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        <Valor
            min={1}
            max={12}
            oi="oi"
        />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Jose Carlos"
            nota={9.5} 
        />
        <Primeiro></Primeiro>    
    </div>
)