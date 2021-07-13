import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class Main extends Component {

    componentDidMount() {
        axios.get('user')
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Main
