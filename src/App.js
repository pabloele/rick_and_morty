import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import characters from './data.js'

function App () {
  function popChars() {
    console.log("chars",characters)
    characters.pop()
  }
  return (      
     
    <div className='App' style={{ padding: '25px' }}>
       <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
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
      <button onClick={popChars}>Pop chars</button>
    </div>
   
  )
}

export default App
