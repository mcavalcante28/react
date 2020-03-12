import React from 'react';
import Header from './components/header';
import "./styles.css";
import Umidade, {Component} from './pages/main/umidade';
import SimpleLineChart from './pages/main/umidade/recharts'


const App = () => (
  <div className="App">
    <Header/>
    <Umidade />
    {/* <SimpleLineChart /> */}
  </div>
);




export default App;
