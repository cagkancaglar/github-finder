import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './components/App'
import {
    BrowserRouter,
    Routes,
    Route,
    Switch
  } from "react-router-dom";


const HomePage = () => {
   return <div>Home Page</div>
};

const ContactPage = () => {
    return <div>Contact Page</div>
};

const ProductsPage = () => {
    return <div>Products Page</div>
};

const NotFound = () => {
    return <div>404 Page</div>
};


const routes =  (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/contact" component={ ContactPage } />
            <Route path="/products" component={ ProductsPage } />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));