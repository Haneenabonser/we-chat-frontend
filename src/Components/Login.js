import React, { Component } from 'react';
import Auth from '../auth/auth';



export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    //for message
    loginHandler(e) {
        e.preventDefault();
        this.setState({
            message: "",
        })
    }

    // Auth.login
    render() {
        return (
            <div>



            </div>
        )
    }
}

export default Login;
