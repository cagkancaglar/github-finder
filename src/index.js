import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './components/App'
import {
    BrowserRouter,
    Routes,
    Route,
    Switch,
    Link
  } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/products">Products</Link> |
        </nav>
    )
};


const HomePage = () => {
    
   return(
    <>
        <div>Home Page</div>
    </>
   ) 
};

 const ContactPage = () => {
    
    return(
     <>
         <div>Contact Page</div>
     </>
    ) 
 };

 const ProductsPage = () => {
    
    return(
     <>
         <div>Products Page</div>
     </>
    ) 
 };

 const NotFoundPage = () => {
    
    return(
     <>
         <div>NotFound Page</div>
         <nav>
             <Link to="/">Home</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/products">Products</Link>
         </nav>
     </>
    ) 
 };

const routes =  (
    <BrowserRouter>
    
        <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/contact" component={ ContactPage } />
            <Route path="/products" component={ ProductsPage } />
            <Route component={ NotFoundPage } />
        </Switch>
        <Nav />
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));