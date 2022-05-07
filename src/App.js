import './App.css';
import React, {useState, useEffect} from "react"
import logo from './logo.svg';

const App = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  useEffect(() => {
    console.log('se ejecuta use effect al actualizar (tanto incrementar como decrementar) el contador numero 1')
  }, [countOne])

  useEffect(() => {
    console.log('se ejecuta use effect al actualizar (tanto incrementar como decrementar) el contador numero 2')
  }, [countTwo])

  const incrementCountOne = () => {
    setCountOne (countOne + 1)
    console.log("incrementa el contador 1")
  }

  const decrementCountOne = () => {
    if (countOne > 0){
      setCountOne (countOne-1)
      console.log("decrementa el contador 1")
    }
  }

  const incrementCountTwo = () => {
    setCountTwo (countTwo + 1)
    console.log("incrementa el contador 2")
  }

  const decrementCountTwo = () => {
    if (countTwo > 0){
      setCountTwo (countTwo-1)
      console.log("decrementa el contador 2")
    }
  }

  const reset = () => {
    setCountOne (0);
    setCountTwo (0)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>inserte su pronóstico para el siguiente partido</p>
        <div>
          <div className='divcounter'>
            <span ><img src="./images/river.png" alt='' className='club'></img><br/></span>
            <button onClick={incrementCountOne}>+</button>
            <p>{countOne}</p>
            <button onClick={decrementCountOne}>-</button>
          </div>
          <div className='divcounter'> <button onClick={reset}>Reset</button></div>
          <div className='divcounter'>
            <span><img src = "./images/boca.png" alt='' className='club'></img></span><br/>
            <button onClick={incrementCountTwo}>+</button>
            <p>{countTwo}</p>
            <button onClick={decrementCountTwo}>-</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
