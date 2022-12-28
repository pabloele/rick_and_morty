import { useState , useEffect} from 'react'
import styles from './App.module.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from "./components/About"
import Login from './components/Login'
import Detail from './components/Detail'



function App () {
 const [characters,setCharacters] = useState([])
 let pathname = useLocation();
 let [access,setAccess] = useState(false);
 let username = 'pablo@gmail.com'
 let password = '1234'
 const navigate = useNavigate();
 
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
   setCharacters((data) => { 
    return data.filter((e) => e.id !== id)
 })
 }
  
 function login (userData) {
      if (userData.username === username && userData.password === password) {
        setAccess(true)
        navigate('/home')
      } 
 }

 useEffect(() => {
   !access && navigate('/');
}, [access]);

  return (      
     
    <div className={styles.App} style={{ padding: '25px' }}>
       <div className={styles.container}>
          <div >
            
            {pathname.pathname !== "/" &&   <NavBar onSearch={onSearch}/>}
           
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


