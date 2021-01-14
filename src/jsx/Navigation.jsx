import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class Navigation extends Component {
    render() {
        return (
            <Fragment>
                <Menu stackable>
                    <Menu.Item header as={Link} to='/'>
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to='/about'>
                        About
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/contact'>
                            Contact Details
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Fragment>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/contact' component={ContactPage} />
                    </Switch>
                </Fragment>
            </Fragment>
            
        );
    }
}

export default Navigation;