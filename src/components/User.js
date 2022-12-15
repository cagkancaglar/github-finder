import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class User extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <>
        <Helmet>
          <title>Users</title>
        </Helmet>
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-5 p-3 border-0">
            <img src={avatar_url} alt="" className="img-fluid rounded-circle" />
            <div className="card-body">
              <h5 className="card-title">{login}</h5>
              <Link
                to={`/user/${login}`}
                className="btn btn-primary btn-sm btn-block rounded-pill"
              >
                Go Profile
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default User;
