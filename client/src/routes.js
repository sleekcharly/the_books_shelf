// import packages
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/* Import components */
// home component
import Home from './components/home';
// user components
import Login from './components/user/login';
import Admin from './components/user/admin';
import Logout from './components/user/logout';

// users post component
import AddPosts from './components/user/admin/posts/add';

//HOC
import MainLayout from './hoc/mainLayout';
import Auth from './hoc/auth';

const Routes = () => {
    return (
        <BrowserRouter>
            <MainLayout>                
                <Switch>
                    <Route path="/admin/posts/create" component={Auth(AddPosts, true)} />
                    <Route path="/admin" component={Auth(Admin, true)} />
                    <Route path="/logout" component={Auth(Logout, true)} />
                    <Route path="/login" component={Auth(Login, false)} />
                    <Route path="/" component={Home} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;