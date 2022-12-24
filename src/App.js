import { useState } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar'

function App () {
 const [characters,setCharacters] = useState([])
 
 
 function onSearch(id) {
  
  fetch(`https://rickandmortyapi.com/api/character/${id.character}`)
    
     .then((response) => response.json())
     
     .then((data) => {
      let exist = false;
        if (data.name) {
          
          
          exist = characters.find((e) => e.id === data.id)
          
          if (exist) {
            alert('ese personaje ya existe')
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
           
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
 }


 function onClose(id) {
   setCharacters((data) => { //data es igual a characters
    return data.filter((e) => e.id !== id)
 })
 }

  return (      
     
    <div className={styles.App} style={{ padding: '25px' }}>
       <div className={styles.container}>
          <div>
            <NavBar
              onSearch={onSearch}
            />
          </div>
       
          <hr />
          <div>
            <Cards
              characters={characters} onClose={onClose}
            />
          </div>
          <hr />
         
        </div>
      </div>
  )
}

export default App
