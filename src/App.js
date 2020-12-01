import React from "react";
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButtons";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      
      <Router>
        
        <Switch>
        <Route path="/chat">
        <Header backButton="/" />
        <Chats />
        </Route>
        <Route path="/">
        <Header />
            <TinderCards />
            <SwipeButton />
        </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
