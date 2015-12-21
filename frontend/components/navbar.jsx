var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



var NavbarInstance = React.createClass({
  render: function () {

    return (
    <div className="navbar">
      <div className="fixedWidth">
        <div className="navbarHeader">
            <Link className="navbarLogo" to="#"><h3>BeerIsGood</h3></Link>
        </div>

        <div className="navbarContent">
          <ul className="navbarLinksUl">
            <li>
              <Link to="beers">BeersIndex</Link>
            </li>
            <li>
              <Link to="#">FriendsIndex</Link>
            </li>
            <li>
              <Link to="home">UserShow</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  }
});

module.exports = NavbarInstance;
