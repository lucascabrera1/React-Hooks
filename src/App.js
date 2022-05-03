import './App.css';
import React, {useState, useEffect} from "react"
import logo from './logo.svg';

const App = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  useEffect(() => {
    console.log('se ejecuta use effect')
}, [countOne])

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
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>hola</code> and save to reload.</p>
        <div>
          <div className='divcounter'>
            <img ></img><br/>
            <button onClick={incrementCountOne}>+</button>
            <p>contador 1 {countOne} veces</p>
            <button onClick={decrementCountOne}>-</button>
          </div>
          <div className='divcounter'>
            <img src></img><br/>
            <button onClick={incrementCountTwo}>+</button>
            <p>contador 2 {countTwo} veces</p>
            <button onClick={decrementCountTwo}>-</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
