import './App.css';
import Main from './Views/Main';
import AddPlayer from './components/AddPlayer';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import { Router } from '@reach/router';


function App() {
  return (
  <div className="App">
  
<Router>
<Main path="/"/>

  <AddPlayer path="/players/addplayer"/>
  </Router>



    </div>
  );
}

export default App;
