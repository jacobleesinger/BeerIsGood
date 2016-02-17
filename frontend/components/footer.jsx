var React = require('react');

var Footer = React.createClass({
  render: function () {

    return (
      <div className="footer">
        <div className="">
          <div className="col-md-4">
            <a href="https://github.com/jacobleesinger/BeerIsGood">Github</a>
          </div>
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/jacobleesinger">LinkedIn</a>
          </div>
          <div className="col-md-4">
            <a href="http://jacobleesinger.com">Personal Site</a>
          </div>

        </div>
      </div>
  )
  }
});
module.exports = Footer;
