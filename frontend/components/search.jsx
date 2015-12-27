var React = require('react');
var UserStore = require('../stores/user_store');
var Select = require('react-select');
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
  			clearable: true,
  		};
  	},

  	updateValue: function (newValue) {
  		console.log('Value changed to ' + newValue);
  		this.setState({
  			selectValue: newValue
  		});
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

      var options = [
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
      ];
  		return (
  			<div className="section">
  				<h3 className="section-heading">{this.props.label}</h3>
  				<Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />




  			</div>
  		);
  	}
  });

module.exports = Search;
