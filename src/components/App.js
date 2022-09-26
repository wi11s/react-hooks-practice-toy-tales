import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  const [toys, setToys] = useState([])

  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(obj => {
      setToys(obj)
    })
  }, [setToys])

  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')
  

  function handleNameChange(e) {
    setNewName(e.target.value)
  }
  function handleImageChange(e) {
    setNewImage(e.target.value)
  }
  function handleSubmit() {
    const newToy = {name: newName, image: newImage, likes: 0}
      fetch('http://localhost:3001/toys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newToy)
      })
    }
    console.log(toys)

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNameChange={handleNameChange} handleImageChange={handleImageChange} handleSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
