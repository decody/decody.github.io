import React from "react";
import { 
    BrowserRouter, 
    Switch, 
    Route 
} from "react-router-dom";
import Main from './Pages/Main';
import Post from './Pages/Post';

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/post/:filepath" component={Post} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;