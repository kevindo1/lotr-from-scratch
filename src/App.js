import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';

function App() {
  return (
    <div className="App">
      <h1>LOTR</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="home-link">
            Home
          </NavLink>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" data-testid="character-link">
            Character
          </NavLink>
          <NavLink to="/books" data-testid="books-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
