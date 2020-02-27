// import packages
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import components
import Home from './components/home';
import Login from './components/user/login';

//HOC
import MainLayout from './hoc/mainLayout';

const Routes = () => {
    return (
        <BrowserRouter>
            <MainLayout>                
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;