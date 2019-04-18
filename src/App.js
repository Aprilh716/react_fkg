import React, { Component } from 'react';
import {fetch as fetchfill} from "whatwg-fetch";
//import Cookies from "js-cookie";
import TabBarCom from "./common/tabBar"
import {
  Home,
  Message,
  Search,
  Mine,
  ShopCar
} from "@views";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";


class App extends Component {
  
  render() {
    console.log(this,11111)
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path='/home' component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/message' component={Message}/>
          <Route path='/shopcar' component={ShopCar}/>
          <Route path='/mine' component={Mine}/>
          
        </Switch>
        
        <TabBarCom/>
      </Router>
    );
  }
  
}

export default App;
