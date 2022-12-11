import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Alert from "./Alert";
import About from "./About";
import NotFound from "./NotFound";
import UserDetails from "./UserDetails";
import GithubState from "../context/github/githubState";
import AlertState from "../context/alert/alertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
