import React from 'react';
import './App.scss';
import Header from './component/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import BodyWrapper from './component/body-wrapper/Body-Wrapper';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header></Header>
        <BodyWrapper></BodyWrapper>
      </React.Fragment>
    </Router>
  );
}

export default App;
