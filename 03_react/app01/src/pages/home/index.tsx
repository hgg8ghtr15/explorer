import { useState } from 'react'
import { Perfil} from '../../components/Perfil'

import './styles.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Bem Vindo</h1>
      <Perfil name={"Fabio"} />
    </div>
  )
}

export default App
