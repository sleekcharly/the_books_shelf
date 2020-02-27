// import packages
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import components
import Home from './components/home';
import Login from './components/user/login';
import Admin from './components/user/admin';
import Logout from './components/user/logout';

//HOC
import MainLayout from './hoc/mainLayout';
import Auth from './hoc/auth';

const Routes = () => {
    return (
        <BrowserRouter>
            <MainLayout>                
                <Switch>
                    <Route path="/admin" component={Auth(Admin)} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={Auth(Login)} />
                    <Route path="/" component={Home} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;