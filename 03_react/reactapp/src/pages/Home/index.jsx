import React,{useState} from 'react'

import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studante, setStudante] = useState()
  // let studante = ""

  // function handleNameChange(name) {
  //   studante = name
  // }

  return (
    <div className='containner'>
      <h1>Nome = {studante}</h1>

      <input 
        type="text" 
        placeholder="Digite Algo" 
        onChange={ e => setStudante(e.target.value) }
      />
      
      <button type="button">Adicionar</button>

      <Card name="Fabio Lucas Marconi" time="10:55:24"/>
      <Card name="Elizete Venson do Nascimento" time="10:55:50"/>
      {/* <Card name="Elizete Venson do Nascimento" time="10:55:50" idade={18}/> */}
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/> */}

    </div>
  )
}

// export default Home
