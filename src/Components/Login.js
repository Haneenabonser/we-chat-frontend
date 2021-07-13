import axios from 'axios';
import React, { Component } from 'react'
import Auth from '../auth/auth'

export class Login extends Component {




    // onChangeUsername(e){
    //     this.setState({
    //         username:e.target.value
    //     })
    // }

    // changePassword(e){
    //     this.setState({
    //         password:e.target.value
    //     })
    // }
    // //for message
    handleSubmit(e){
        e.preventDefault();
      const data={
          email:this.email,
          password:this.password
      }
      //here send axios when log in
      axios.post('http://localhost:3000/login',data)
      .then(res =>{
          //get  the token localStorge 
          localStorage.setItem('token',res.token)
          console.log(res)
      })
      .catch(err =>{
         console.log(err) 
      })
    }

    render() {
        return (
            <div>

<h1>This Login page</h1>
{/* create form for log in */}
 <form onSubmit={this.handleSubmit}>
     <h3>Log in</h3> </form>

     <div className="form-grop">
<label>Email</label>
<input type ="text" className="form-control" placeholder="email"
onChange={   e=> this.email=e.target.value}/>
</div>
{/* <div className="form-grop">
<label>User-Name</label>
<input type ="text" className="form-control" placeholder="userName"
onChange={   e=> this.username=e.target.value}/>
</div> */}


<div className="form-grop">
<label>Password</label>
<input type ="text" className="form-control" placeholder="Password"
onChange={   e=> this.Password=e.target.value}/>
</div>

            </div>
        )
    }
}

export default Login
