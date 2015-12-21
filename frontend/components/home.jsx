var React = require('react');
var Navbar = require('./navbar');
var UserShow = require('./user_show');

var Header = React.createClass({
  render: function (){
    debugger;
    return(
      <Navbar currentUser={this.props.currentUser}/>
    )
  }
});

var MainContent = React.createClass({
  render:function () {
    return(
      <UserShow currentUser={this.props.currentUser} />
    )
  }
})

var Home = React.createClass({

  render: function () {
debugger;
    return(
      <div>
        <Header currentUser={this.props.currentUser}/>
        <UserShow currentUser={this.props.currentUser}/>
      </div>
    );
  }

});


module.exports = Home;
