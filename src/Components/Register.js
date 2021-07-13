import axios from 'axios';
import React, { Component } from 'react'

export class Register extends Component {



    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log('hello from the other side');
    }

    handleRegister = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        //here send axios when register
        axios.post('http://localhost:5000/signup', data)
            .then(res => {
                //get  the token localStorge 
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h3>Register</h3>
                {/* create form for log in */}
                <form onSubmit={this.handleRegister}>

                    <div className="form-grop">
                        <label>username</label>
                        <input type="text" className="form-control" placeholder="username"
                            onChange={(e) => this.onChangeUsername(e)} />
                    </div>
                    <div className="form-grop">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="email"
                            onChange={(e) => this.onChangeEmail(e)} />
                    </div>

                    <div className="form-grop">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password"
                            onChange={(e) => this.changePassword(e)} />
                    </div>

                    <button>Register</button>

                </form>
            </div>
        )
    }
}

export default Register;