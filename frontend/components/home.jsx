var React = require('react');
var Navbar = require('./navbar');
var UserShow = require('./user_show');



var MainContent = React.createClass({


  render:function () {
    debugger;
    return(
      <this.props.subPage currentUser={this.props.currentUser} />
    )
  }
})

var Home = React.createClass({

  getInitialState: function () {
    return ({subPage: UserShow});
  },

  navbarChangeHandler: function(newSubPage) {
    debugger;
    this.setState({subPage: newSubPage}
    )
  },

  render: function () {
    return(
      <div>
        <Navbar currentUser={this.props.currentUser} subPage={this.state.subPage}
          onChange={this.navbarChangeHandler}/>
        <MainContent currentUser={this.props.currentUser} subPage={this.state.subPage}/>
      </div>
    );
  }

});


module.exports = Home;
