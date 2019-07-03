import React from 'react';
import * as Data from './data/fake_posts.json';

import Header from './components/header.js';
import ListLayout from './components/listLayout.js';
import Footer from './components/footer.js';

import Wrapper from './sharedComponents/wrapper.js';
import './App.css';



function App() {
  return (
    <div className="App">     
      <Header />
      <Wrapper>
        <ListLayout posts={Data}/>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
