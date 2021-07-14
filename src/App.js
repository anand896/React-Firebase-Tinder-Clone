import './App.css';
import Header from './componant/Header';
import TinderCards from "./componant/TinderCards";
import SwipeButtons from "./componant/SwipeButtons";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton='/' />
            <h1>Chat Page</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
