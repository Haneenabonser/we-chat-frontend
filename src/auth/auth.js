import axios from "axios";

// this code from jwt-auth

const API_URL = "http://localhost:3000/api/auth/";

class Auth {
  login(username, password) {
    localStorage.setItem('bgcolor', 'red');

    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
            //localStorge for take the token from it
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
//here delete from local storge
  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }


  //what we have on local from user just send it
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new Auth();