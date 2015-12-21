var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var Nav = require('react-bootstrap').Nav;
var MenuItem = require('react-bootstrap').MenuItem;
var BeersIndex = require('./beers_index');
var ReactRouter = require('react-router');


var NavbarInstance = React.createClass({
  render: function () {
    debugger;
    return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">BeerIsGood</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <ul>
            <li>
              <Link to="beers">BeersIndex</Link>
            </li>
            <li>
              <Link to="#">FriendsIndex</Link>
            </li>
            <li>
              <Link to="/">UserShow</Link>
            </li>
          </ul>
          <NavItem eventKey={2} href="#">FriendsIndex</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
});

module.exports = NavbarInstance;
