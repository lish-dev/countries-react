import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { BrowserRouter as Router, Route, } from "react-router-dom";



function App() {
  return (
    
    <Router>
      <Header />
      <Route exact path="/"> 
      <Filter />
        <Countries/>
        </Route>
    </Router>
    
  );
}

export default App;
