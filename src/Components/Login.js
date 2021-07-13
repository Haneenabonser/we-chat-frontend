import axios from 'axios';
import React, { Component } from 'react'

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
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
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('yallaaaaaaaaaa');
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        
        //here send axios when log in
        axios.post('http://localhost:5000/signin', userData)
            .then(res => {
                //get  the token localStorge 
                console.log('haneeeeeeeeeeen');
                console.log(res);
                localStorage.setItem('token', res.data.token);
                console.log('rojeeeeeena');
            })
            .catch(err => {
                console.log(err)
            })
    }

  

    render() {
        return (
            <div>
                <h1>This Login page</h1>
                {/* create form for log in */}
                <form onSubmit={this.handleSubmit}>
                    <h3>Log in</h3>

                    <div className="form-grop">
                        <label>username</label>
                        <input type="text" className="form-control" placeholder="username"
                            onChange={(e) => this.onChangeUsername(e)} />
                    </div>

                    <div className="form-grop">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password"
                            onChange={(e) => this.changePassword(e)} />
                    </div>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;