var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



var NavbarInstance = React.createClass({
  render: function () {

    return (
    <div classsName="navbar navbar-default">
      <div className="navbar-header">

          <Link className="navbar-brand" to="#">BeerIsGood</Link>

        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
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
      </div>
    </div>
  );
  }
});

module.exports = NavbarInstance;
