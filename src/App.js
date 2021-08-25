/* eslint-disable react/prefer-stateless-function */
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/home';
import CalcPage from './pages/calculator';
import Quote from './pages/quotes';

function App() {
  return (
    <div className="App">
      <Router>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <nav className="d-flex">
            <div>
              <h1 className="header">Math Magicians</h1>
            </div>
            <div>
              <Link className="p-10 mt-5 text-decor r-border menu-focus h-1" to="/">Home</Link>
              <Link className="p-10 mt-5 text-decor r-border menu-focus h-1" to="/calculator">Calculator</Link>
              <Link className="p-10 mt-5 text-decor m-right-5 h-1" to="/quote">Quote</Link>
            </div>
          </nav>
        </header>
        <main
          style={{
            padding: '0px 70px',
          }}
        >
          <Switch>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/calculator">
              <CalcPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
