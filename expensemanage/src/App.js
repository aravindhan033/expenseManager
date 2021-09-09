
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './css/common.css';
import HomePage from "./component/homepage";
import LoginBox from './component/loginpage';

function App() {
  return(
    <Router>
        <Switch>
          <Route exact path="/">
            <LoginBox/>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>          
        </Switch>
    </Router>
  );
  
}

export default App;
