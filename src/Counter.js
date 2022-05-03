import React, {useState, useEffect} from "react"
import logo from './logo.svg';

const Counter = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

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

  /*useEffect(() => {
      console.log('se ejecuta use effect')
  }, [countOne])*/
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>hola</code> and save to reload.
        </p>
        <div>
          <button onClick={incrementCountOne}>+</button>
          <div>usted hizo click {countOne} veces</div>
          <button onClick={decrementCountOne}>-</button>
        </div>
        <div>
          <button onClick={incrementCountTwo}>+</button>
          <div>usted hizo click {countTwo} veces</div>
          <button onClick={decrementCountTwo}>-</button>
        </div>
      </header>
    </div>
  );
}

export default Counter