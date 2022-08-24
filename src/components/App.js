import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import axios from "axios";
import Alert from "./Alert";
import About from "./About";
// import AppRouter from "../routers/AppRouter";
import UserDetails from "./UserDetails";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.state = {
      loading: false,
      users: [],
      user: {},
      repos: [],
      alert: null
    }
  }

  searchUsers(keyword) {
    this.setState({ loading: true });

    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) =>
          this.setState({ users: res.data.items, loading: false })
        );
    }, 1000);
  }

  getUser(username) {
    this.setState({loading: true,})
    setTimeout(() => {
        axios
          .get(`https://api.github.com/users/${username}`)
          .then((res) =>
            this.setState({ user: res.data, loading: false })
          );
      }, 1000);
  }

  getUserRepos(username) {
    this.setState({loading: true,})
    setTimeout(() => {
        axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then((res) =>
            this.setState({ repos: res.data, loading: false })
          );
      }, 1000);
  }

  clearUsers() {
    this.setState({ users: [] });
  }

  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Switch>
          <Route exact
            path="/"
            render={(props) => (
              <>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClearButton={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users users={this.state.users} loading={this.state.loading} />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/user/:login" render={props => (
            <UserDetails {...props} getUser= {this.getUser} user={this.state.user} loading= {this.state.loading} getUserRepos={this.getUserRepos} repos={this.state.repos} />
          )} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
