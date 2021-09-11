
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import './App.css';
import './css/common.css';
import './js/CONSTANT';
import HomePage from "./component/homepage";
import Dashboard from "./component/dashboard";
import LoginBox from './component/loginpage';
/*
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYDj54YYeyLAyOjhT3uoOBYSzwi2yxtuI",
  authDomain: "expensemanager-c2aab.firebaseapp.com",
  projectId: "expensemanager-c2aab",
  storageBucket: "expensemanager-c2aab.appspot.com",
  messagingSenderId: "888385908218",
  appId: "1:888385908218:web:c51b16fc6007c719fd4843",
  measurementId: "G-V1B7KYEJM9"
};

// Initialize Firebase

*/
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
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>          
        </Switch>
    </Router>
  );
  
}

export default App;
