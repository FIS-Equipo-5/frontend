import React from 'react';
import Transfers from './transfers/Transfers.js';
import Matches from './tournaments/Matches'
import Authenticate from './auth/Authenticate.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from './common/Menu';
import Footer from './common/Footer'



function App() {
  console.log('token', localStorage.getItem("authToken"));
  if (localStorage.getItem("authToken") == "undefined") {
    return (<Authenticate />);
  } else {

    return (
      <div id="app">
        <Menu />
        <div id="transfers">
          <h2>Transfers </h2>
          <Transfers />
        </div>


        <div id="tournamentsMS" className="row">
          <div id="tournamens" className="col-6">
            <h2>Tournaments </h2>
            {/* <Tournaments /> */}
          </div>
          <div id="matches" className="col-6">
            <h2>Matches </h2>
            <Matches />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
