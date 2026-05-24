import React, { FunctionComponent, Fragment } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';

const App: FunctionComponent = props => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App;
