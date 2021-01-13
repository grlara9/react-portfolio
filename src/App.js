import Navigation from './components/Navigation'
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio'

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
            <Navigation />
         <main>
        <Switch>
        
          <Route exact path="/"> 
            <Aboutme />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
          </main>
      </Router>
    </div>
  );
}

export default App;
