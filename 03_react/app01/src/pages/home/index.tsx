import { useState, useEffect } from 'react'
import { Perfil} from '../../components/Perfil'
import { RedeSocial } from '../../components/RedeSocial'
import { IconsSocial } from '../../components/IconsSocial'


import './styles.css'

function App() {
  // const [count, setCount] = useState(0)

  const [usuario, setUsuarios] = useState({name:'@alguma coisa', avatar:'https://avatars.githubusercontent.com/u/31228896?s=96&v=4'})


  const use = "hgg8ghtr15"
  const url = "https://api.github.com/users"

  async function fetchData(){
    const response = await fetch(`${url}/${use}`)
    const data = await response.json()
    console.log(data)
    setUsuarios({
      name: data.name,
      avatar: data.avatar_url,
    })
  }

  useEffect(() => {

    fetchData()

  },[])


  return (
    <div className="App">
      {/* <h1>Bem Vindo</h1> */}
      <Perfil 
        name={usuario.name}
        avatar={usuario.avatar} 
      />
      <RedeSocial
        link1={"Facebook1"} 
        link2={"Instagram"} 
        link3={"Github"}
        link4={"Linkedin"}
      />

      <IconsSocial
        rede1='teste'
      />
    </div>
  )
}

export default App
