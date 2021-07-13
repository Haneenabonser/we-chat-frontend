import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }


    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        }
        axios.get('user', config).then(
            res => {
                this.setState({
                    user: res.data
                })
            },
            err => {
                console.log(err);
            }
        )
    }
    render() {
        return (
            <p>
                hello {this.state.user.username}
            </p>
        )
    }
}


export default Main;
