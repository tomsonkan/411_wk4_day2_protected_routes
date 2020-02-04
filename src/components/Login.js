import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class App extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  //Cookies are small bits of information that websites store on your browser. 
  //They are key-value pairs like objects but they only contain text. They help 
  //the browser make certain decisions using the content that's been stored in these cookies. 
  login = (e) => {
    e.preventDefault()
    // set cookie here
    document.cookie = `loggedIn=true;max-age=60*1000`
    // set loggedIn = true and max-age = 60*1000 (one minute)
    window.location.replace("/")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
