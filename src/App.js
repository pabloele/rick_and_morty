import { useState } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import About from "./components/About"
import Login from './components/Login'
import Detail from './components/Detail'


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

<Routes>
    <Route path="/" element={<Login/>}> </Route>
    <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
    <Route path="/about" element={<About/>}> </Route>
    <Route path="/detail/:detailId" element={<Detail/>}></Route>



</Routes>


        </div>
      </div>
  )
}

export default App
