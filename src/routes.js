import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import * as pages from './pages';

class Routes extends React.Component{
    render(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={pages.HomePage}/>
                <Route exact path="/books" component={pages.ListBookPage}/>
            </Switch>
        </BrowserRouter>
    )}
}

export default Routes;