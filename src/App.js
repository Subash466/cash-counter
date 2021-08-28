import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import BillAmount from './components/Bill_Amount/BillAmount';
import { useState } from "react";
import GivenAmount from "./components/Given/GivenAmount";
import BalanceAmount from "./components/Balance/BalanceAmount";
import Navbar from "./components/Header/Navbar";


function App() {
  //state send as props
  const [bill,setBill]=useState(0);
  const [given,setGiven]=useState(0);
  
  //function to update setState
  const billAmount=(x)=>{
    setBill(x)
  }

  const givenAmount=(x)=>{
    setGiven(x)
  }
 
  return (
    <div className="App">
    <Navbar /> 
    <BrowserRouter>
    <Switch>
    <Route path="/"  exact component={()=><BillAmount billAmount={billAmount}/>} />
    <Route path="/user" component={()=><GivenAmount  givenAmount={givenAmount}/>}/>
    <Route path="/balance" component={()=><BalanceAmount bill={bill} given={given}/>}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
