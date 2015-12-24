var React = require('react');
var UserStore = require('../stores/user_store');
var Select = require('react-select');

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];


var Search = React.createClass({

  getInitialState: function() {
    return ({
      searchable: UserStore.searchable(),
      value: [];
    });
  },

  componentDidMount: function () {
    this.userToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.userToken.remove();
  },

  handleClick: function (e) {
    e.preventDefault;
    debugger;
  },

  logChange: function(val) {
    console.log("Selected: " + val);
  },

  render: function () {
    return(
      <div>

          <div className="searchDiv">



              <Select
                className="form-control"
                className="searchResult"
                name="form-field-name"
                value=""
                options={options}
                onChange={this.logChange}
              />


          </div>

          <div className="resultsIndexDiv"
            {this.state.value.map(function(result, idx) {
              return(
                <div className="result">

                </div>
              )
            })}

      </div>
    );
  }
});

module.exports = Search;
