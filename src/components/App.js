import React, { useState } from "react";
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
import GithubState from "../context/githubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  const getUser = (username) => {
    setLoading(true);
    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
        setUser(res.data);
        setLoading(false);
      });
    }, 1000);
  };

  const getUserRepos = (username) => {
    setLoading(true);

    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          setRepos(res.data);
          setLoading(false);
        });
    }, 1000);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <Search
                  clearUsers={clearUsers}
                  showClearButton={users.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <Users users={users} loading={loading} />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route
            path="/user/:login"
            render={(props) => (
              <UserDetails
                {...props}
                getUser={getUser}
                user={user}
                loading={loading}
                getUserRepos={getUserRepos}
                repos={repos}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
