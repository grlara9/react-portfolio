import Navigation from './components/Navigation'
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
return (
  <div className="App">
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/"> 
            <Aboutme />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
  );
}

export default App;
