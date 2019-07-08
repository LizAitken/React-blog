import React from 'react';
import * as Data from './data/fake_posts.json';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header.js';
import ListLayout from './components/listLayout.js';
import Footer from './components/footer.js';

import Wrapper from './sharedComponents/wrapper.js';
import './App.css';


function Index() {
  return <h1>Home Page</h1>;
};


function App() {
  return (
    // <Router>
      <div className="App">     
        <Header />
        {/* <Route exact path="/" component={Index} />
        <Route exact path="/listings" component={ListLayout} /> */}
        <Wrapper>
          <ListLayout posts={Data}/>
        </Wrapper>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
