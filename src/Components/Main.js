import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class Main extends Component {

    componentDidMount() {
        const config ={
            header :{
                Authorization: 'Bearer ' + localStorage.getItem('token')  
             }
        }
        axios.get('user').then(
            res =>{
                console.log(res);
            },
            err =>{
                console.log(err);
            }
        )
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Main
