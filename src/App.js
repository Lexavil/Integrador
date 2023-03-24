import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App' style={{padding: "25px"}}>
         <div>
         <div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la cardi')}
         />
      </div>
      <hr />
      <div>
         <Cards characters={characters} />

      </div>
      
      <hr />
     
      </div>
   );
}

export default App;
