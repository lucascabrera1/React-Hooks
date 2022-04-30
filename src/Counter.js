import React, {useState, useEffect} from "react"

const counter = () => {
    const [count, setCount] = useState(0)

  const handleclick = () => {
    setCount (count + 1)
  }

  const decrementclick = () => {
    if (count > 0){
      setCount (count-1)
    }
  }

  useEffect(() => {
      console.log('se ejecuta use effect')
  }, [count])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>hola</code> and save to reload.
        </p>
        <button onClick={handleclick}>+</button>
        <div>usted hizo click {count} veces</div>
        <button onClick={decrementclick}>-</button>
        <button onClick={handleclick}>+</button>
        <div>usted hizo click {count} veces</div>
        <button onClick={decrementclick}>-</button>
      </header>
    </div>
  );
}

export default counter