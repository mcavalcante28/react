import firebase, { apps } from 'firebase';
import React, { Component } from 'react';
import api from "../../../services/api";

var firebaseConfig = {
    apiKey: "AIzaSyDXSnHJv13AuR--Yfps6_lbcfgLS9GtdRc",
    authDomain: "testeesp32-48ea2.firebaseapp.com",
    databaseURL: "https://testeesp32-48ea2.firebaseio.com",
    projectId: "testeesp32-48ea2",
    storageBucket: "testeesp32-48ea2.appspot.com",
    messagingSenderId: "147816304505",
    appId: "1:147816304505:web:6acf1830b58b49f68029a8",
    measurementId: "G-WGFS4VKZYY"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var dataRef = firebase.database().ref();


export default class Apps extends Component{
    constructor(props){
        super(props)
        this.state = {
            umid:[], 
            temp:[],
            date:[]
        };
    }
    componentWillMount(){
        dataRef.on("value", (snapshot)=>  {
            const response = api.get('/api/data');
            console.log(snapshot.val())
            this.setState({umid:  response.umidade})
            this.setState({temp:  response.temperature})
            this.setState({date:  response.dateRegister})
    })
    }    
    render(){
        return (
            <div className="dataList">
            <h1>{this.state.umid}</h1>
            <h1>{this.state.temp}</h1>
            <h1>{this.state.date}</h1>
            </div>
        ) 
    }
}
