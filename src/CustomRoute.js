import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Jso from './jso';
import Json from './Json';
import Json1 from './Json333'
import PageNotFound from './PageNotFound';
import Header from './Header'
import Signin from './Signin';
import Signup from './Signup';
import Forget from './Forget';
import Fetch from './Movie/Fetch';
import Fetch1 from './Movie/Fetch1'
import Fetch2 from './Movie/Fetch2'
import Fetch3 from './Movie/Fetch3';
import Fetch4 from './Movie/Fetch4';
import UnAuth from './unAuthenticate'
export default class CustomRoute extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <Switch>
                    
                        <Route component={Fetch} exact path='/' />
                        <Route component={Fetch1} exact path='/latest/1' />
                        <Route component={Fetch2} exact path='/latest/2' />
                        <Route component={Fetch3} exact path='/latest/3' />
                        <Route component={Fetch4} exact path='/latest/4' />
                        <Route component={Json} exact path='/hindi' />
                        <Route component={Fetch} exact path="/latest" />
                        <Route component={Jso} exact path="/popular" />
                        <Route component={Json1} exact path="/english" />
                        <Route component={Signin} exact path='/signin' />
                        <Route component={Signup} exact path='/signup' />
                        <Route component={Forget} exact path='/forget' />
                        <Route component={UnAuth} exact path="/UnAuth/:key" />
                        <Route component={PageNotFound} path="/PageNotFound" />
                        <Redirect to="/PageNotFound"  />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

