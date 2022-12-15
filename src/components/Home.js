import React from "react";
import Search from "./Search";
import Users from "./Users";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Search />
        <Users />
      </>
    )
};

export default Home;
