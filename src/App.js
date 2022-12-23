import styles from './App.module.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import characters from './data.js'
import NavBar from './components/NavBar'

function App () {
 function onSearch(id) {
  alert(id)
 }
  return (      
     
    <div className={styles.App} style={{ padding: '25px' }}>
       <div className={styles.container}>
          <div>
            <NavBar
              onSearch={onSearch}
            />
          </div>
          {/* <div>
            <Card
              name={Rick.name}
              species={Rick.species}
              gender={Rick.gender}
              image={Rick.image}
              onClose={() => window.alert('Emulamos que se cierra la card')}
            />
          </div> */}
          <hr />
          <div>
            <Cards
              characters={characters}
            />
          </div>
          <hr />
         
        </div>
      </div>
  )
}

export default App
