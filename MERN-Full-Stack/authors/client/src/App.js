import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Update from './views/Update';
import Detail from './views/Detail';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
    <Main />
    <Router>
      
      <Update path="product/:id/edit"/>
      <Detail path="product/:id" />

      </Router>
    </div>
  );
}

export default App;
