import React,{useState, useEffect} from 'react'

import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studanteName, setStudanteName] = useState()
  const [studante, setStudante] = useState([])
  const [user, setUser ] = useState({name:"", avatar: ""})


  function handleAddStudent(){
    const newStudent = {
      name: studanteName,
      time: new Date().toLocaleTimeString("pt-br",{ 
        hour:'2-digit', 
        minute:'2-digit', 
        second:'2-digit'
      })
    }
    
    setStudante(prevState => [...prevState, newStudent])

  }

  useEffect(()=>{

    async function fetchData(){
      const response = await fetch("https://api.github.com/users/hgg8ghtr15")
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url}
      )
    }
    
    fetchData()

    //ações que executa assim que redenriza
    console.log("Foi chamado")
  },[studante])

  return (
    <div className='containner'>
      <header>
        <h1>Lista de estudante </h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>
      </header>
      

      <input 
        type="text" 
        placeholder="Digite Algo" 
        onChange={ e => setStudanteName(e.target.value) }
      />
      
      <button type="button"onClick={handleAddStudent}>Adicionar</button>

      <Card name="Fabio Lucas Marconi" time="10:55:24"/>
      <Card name="Elizete Venson do Nascimento" time="10:55:50"/>

      {
        studante.map(studante =>(
          <Card 
            key={studante.time}
            name={studante.name} 
            time={studante.time}/> 
          ))
      }

    </div>
  )
}

// export default Home
