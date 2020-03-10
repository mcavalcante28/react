import React, { Component } from 'react';
import api from "../../services/api";
import firebase, { apps } from 'firebase';



export default class Main extends Component{
    state = {
        umid:[], 
        temp:[],
        date:[]
    };
    componentWillMount(){
        this.loadData();
    }
    loadData = async() => {

        const response = await api.get('/api/data');
        console.log(response);
        this.setState({umid: response.data.umidade});
        this.setState({temp: response.data.temperature});
        this.setState({date: response.data.dateRegister})
    };
    
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

