var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var Nav = require('react-bootstrap').Nav;
var MenuItem = require('react-bootstrap').MenuItem;
var BeersIndex = require('./beers_index');


var navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">BeerIsGood</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">BeersIndex</NavItem>
        <NavItem eventKey={2} href="#">FriendsIndex</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

module.exports = navbarInstance;
