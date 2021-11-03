import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Cards from "./components/Cards"
import Card from "./components/Card"
import Nav from "./components/Nav"
import Fav from "./components/Fav"


function App() {
  return (
   <>
     <Nav />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/cards" component={Cards} />
     <Route exact path="/card/:id" component={Card} />
     <Route exact path="/about" component={About} />
     <Route exact path="/Fav" component={Fav} />
     <Route path="*" render={()=>{
       return <h1>404</h1>;
     }} />
     </Switch>
    </>
  );
}

export default App;