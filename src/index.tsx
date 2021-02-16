import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateCar } from './components';
// can also: import { Home } from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/car_logo.png';
import './styles.css'


// Import from React-Router-Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';


render(
  <React.StrictMode>
    <Router>

      <Navbar bg='dark' variant ='dark'>
        <Navbar.Brand>
          <img
            alt="Coding Car Members"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            <Link to="/">Coding Cars Members Area</Link>
        </Navbar.Brand>
        {/* Nav Items to the right */}
        <Nav className="move-nav" activeKey='/'>
          <Nav.Item>
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to='/Create'>Create a Car</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home title="Coding Cars"/>
        </Route>
        <Route path="/create">
          <CreateCar />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
