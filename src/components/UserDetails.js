import React, { useContext, useEffect } from "react";
import Loading from "./Loading";
import Repos from "./Repos";
import GithubContext from "../context/github/githubContext";
import { Helmet } from "react-helmet";

const UserDetails = ({ match }) => {
  const { getUser, user, loading, repos, getUserRepos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    html_url,
    bio,
    blog,
    followers,
    following,
    public_repos,
  } = user;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Helmet>
          <title>User Details</title>
        </Helmet>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={avatar_url} />
                <div className="card-body">
                  <p className="card-text">{name}</p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> {location}{" "}
                  </p>
                  <p>
                    <a
                      className="btn btn-block btn-primary btn-sm"
                      href={html_url}
                    >
                      Github Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  {bio && (
                    <React.Fragment>
                      <h3>About</h3>
                      <p>{bio}</p>
                    </React.Fragment>
                  )}
                  {blog && (
                    <React.Fragment>
                      <p>Blog</p>
                      <p>{blog}</p>
                    </React.Fragment>
                  )}
                  <div>
                    <span className="badge badge-primary m-1 p-3">
                      Followers: {followers}{" "}
                    </span>
                    <span className="badge badge-danger m-1 p-3">
                      Following: {following}{" "}
                    </span>
                    <span className="badge badge-success m-1 p-3">
                      Repo: {public_repos}{" "}
                    </span>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <Repos repos={repos} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserDetails;
