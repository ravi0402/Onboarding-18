var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass(
{
	render : function()
	{
		return <div className="thumbnail">
			      <img src={this.props.imageUrl} width="380px" height="380px" />
			      <div className="caption">
			        <h3>{this.props.label}</h3>
			        <p>{this.props.content}</p>
			        <p><Badge title={this.props.title} number={this.props.number}/></p>
			      </div>
			    </div>
	}
});
