import React from 'react';
import Header from './components/header';
import "./styles.css";
import Main from './pages/main';
import Apps from './pages/main/apss';
import firebase from 'firebase';


const App = () => (
  <div className="App">
    <Header/>
    {/* <Apps /> */}
    <Main />
  </div>
);




export default App;
