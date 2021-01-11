import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route>
      <Navigation />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
