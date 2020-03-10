import firebase from 'firebase';
import React, { Component } from 'react';
import './style.css'
import {firebaseConfig} from '../../../configFire'

export default class Apss extends Component{
    constructor(){
        super()
        this.app = firebase.initializeApp(firebaseConfig);
        this.state = {
            umid:"Loading",
            temp:"Loading"
            // date: Date.getDate()
        }
    }

    componentDidMount(){
        this.database = this.app.database().ref().child('umi');
        this.database.on("child_added", snap => {
            this.setState({
                umid: snap.val()
            });
        });
        this.database = this.app.database().ref().child('temp');
        this.database.on("child_added", snap => {
            this.setState({
                temp: snap.val()
            });
        });

    }

    render(){
        return(
            <div>
                <h1 id="text_umi">Umidade: {this.state.umid}</h1>
                <h1 id="text_temp">Temperatura: {this.state.temp}</h1>
                <h1 id="text_temp">Data: {this.state.date}</h1>
            </div>
        )
    }
}

