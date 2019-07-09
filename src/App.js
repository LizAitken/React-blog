import React from 'react';
import * as Data from './data/fake_posts.json';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header.js';
import ListLayout from './components/listLayout.js';
import Footer from './components/footer.js';
import PostLayout from './components/PostLayout';

import Wrapper from './sharedComponents/wrapper.js';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">     
        <Header />       
        <Wrapper>
          <Route path="/" exact render={() => <ListLayout posts={Data} />} />
          <Route 
            path="/post/:id?" 
            render={routeProps => <PostLayout posts={Data} {...routeProps} />} 
          />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
