import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Board from './components/Board/'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Board />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
