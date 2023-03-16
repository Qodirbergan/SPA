
import './App.css';
import Header from "./components/Headere";
import {Route,Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App bg">
     <Header/>
     <main className="container content mt-5 ">

       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route  path="/contacts" component={Contacts}/>
         <Route  component={Error}/>

       </Switch>


     </main>
        <Footer/>
    </div>
  );
}

export default App;
