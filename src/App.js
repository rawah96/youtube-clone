import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage'
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
        <div className="home-page">
          <Sidebar/>
          <Recommended/>
        </div>
        {/* Video section */}
        
          </Route>
          <Route path="/search/:searchTerm">
          <div className="home-page">
            <Sidebar/>
            <SearchPage/>
          </div>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
