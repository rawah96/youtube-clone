import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Recommended from './Recommended';
function App() {
  return (
    <div className="app">
      <Header/>
      {/* Sidebar & recommended vids! */}
      <div className="home-page">
        <Sidebar/>
        <Recommended/>
      </div>
      {/* Video section */}
    </div>
  );
}

export default App;
