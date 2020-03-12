import firebase from 'firebase';
import React, { Component } from 'react';
import './style.css'
import {firebaseConfig} from '../../../configFire'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from 'recharts'



export default class Apss extends Component{
    constructor(){
        super()
        this.app = firebase.initializeApp(firebaseConfig);
        this.state = {
            umid:"",
            temp:"",
            date:"",
            data:[
                {name:this.date, pv:this.umid},
            ]
        }
    }
    componentDidMount(){
        this.database = this.app.database().ref().child('umi');
        this.database.on("child_added", snap => {
            this.setState({
                umid: snap.val(),
                date: new Date().getSeconds(),
                data: [{name:this.state.date, pv:this.state.umid}]
            });
        });
        this.database = this.app.database().ref().child('temp');
        this.database.on("child_added", snap => {
            this.setState({
                temp: snap.val(),
            });
        });

    }

    render(){
        return(
            <div>
                <h1 id="text_umi">Umidade: {this.state.umid}</h1>
                <h1 id="text_temp">Temperatura: {this.state.temp}</h1>
                <h1 id="text_data">Data: {this.state.date}</h1> 
                <h1> Gráfico de Umidade</h1>
      <LineChart width={500} height={300} data={this.state.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="pv" />
      </LineChart>

            </div> 
        )
    }
}
