
import './App.css';
import Header from "./components/Headere";
import {Route,Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
function App() {
  return (
    <div className="App bg">
     <Header/>
     <main className="container content mt-5 ">

       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route  path="/contacts" component={Contacts}/>
         <Route path="/category/:name"  component={Category}/>
         <Route path="/meal/:id" component={Recipe} />
         <Route  component={Error}/>

       </Switch>


     </main>
        <Footer/>
    </div>
  );
}

export default App;
