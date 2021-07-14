import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    


    <div className="App">
    
    <PersonCard firstName="Doe " age={45} hairColor="Black" lastName="Jane" />
    <PersonCard firstName="John" lastName="Smith" age="88" hairColor="brown" />
    <PersonCard firstName="Millard" lastName="Filmore" age="50" hairColor="brown" />
    <PersonCard firstName="Maria" lastName="Smith" age="62" hairColor="brown" />
    
      <header className="App-header">
      
       
       
      </header>
      
    </div>
    
  );
  
}


export default App;

