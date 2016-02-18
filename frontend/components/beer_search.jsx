var React = require('react');
var BeerStore = require('../stores/beer_store');
var Select = require('react-select');
var BeerShow = require('./beer_show');
require('react-select/dist/react-select.css');




var Search = React.createClass({
  	displayName: 'search',
  	propTypes: {
  		label: React.PropTypes.string,
  		searchable: React.PropTypes.bool,
  	},

  	getDefaultProps: function () {
  		return {
  			label: 'values:',
  			searchable: true,
  		};
  	},

  	getInitialState: function () {
  		return {
  			disabled: false,
  			searchable: this.props.searchable,
  			selectValue: '',
  			clearable: true
  		};
  	},

  	updateValue: function (beerId) {

      this.props.onClick(BeerShow, this.props.currentUser, BeerStore.find(beerId));

  	},

  	focusStateSelect: function () {
  		this.refs.stateSelect.focus();
  	},

  	toggleCheckbox: function (e) {
  		var newState = {};
  		newState[e.target.name] = e.target.checked;
  		this.setState(newState);
  	},




  	render: function () {

      var options = [];
      var Searchable = BeerStore.all();

      Searchable.forEach(function(beer) {
        options.push({value: beer.id, label: beer.name});
      });

  		return (
  			<div className="section">

  				<Select
            className="select beerSearch"
            ref="stateSelect"
            autofocus
            options={options}
            simpleValue
            clearable={this.state.clearable}
            name="selected-state"
            disabled={this.state.disabled}
            value={this.state.selectValue}
            onChange={this.updateValue}
            searchable={this.state.searchable}
            placeholder="Find a Beer"
            />

  			</div>
  		);
  	}
  });

module.exports = Search;
