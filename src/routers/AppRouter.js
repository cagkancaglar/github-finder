import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Switch,
    Link,
    NavLink
  } from "react-router-dom";


  const Nav = () => {
    return (
        // <nav>
        //     <Link to="/">Home</Link> |
        //     <Link to="/contact">Contact</Link> |
        //     <Link to="/products">Products</Link> |
        // </nav>

    <nav>
        <NavLink exact to="/" activeClassName='active'>Home</NavLink> |
        <NavLink to="/contact" activeClassName='active'>Contact</NavLink> |
        <NavLink exact to="/products" activeClassName='active'>Products</NavLink> |
        <NavLink to="/products/12" activeClassName='active'>Products Details</NavLink> |
    </nav>
    )
};

const Header = () => {
    return (
        <h1>Github Finder</h1>
    )
}

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

 const ProductsDetailsPage = () => {
    return (
    <>
         <div>ProductsDetails Page</div>
     </>
    )
 }

 const NotFoundPage = () => {
    
    return(
     <>
         <div>NotFound Page</div>
     </>
    ) 
 };

 const AppRouter = () => {
    return (
        <BrowserRouter>
        <Header />
        <Nav />
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/contact" component={ ContactPage } />
                <Route path="/products" component={ ProductsPage } />
                <Route path="/products/:id" component={ ProductsDetailsPage } />
                <Route component={ NotFoundPage } />
            </Switch>
    </BrowserRouter>
    )
 }

export default AppRouter