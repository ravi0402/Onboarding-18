var React = require('react');

module.exports = React.createClass({
	render : function()
	{
		return <button type="button" className={"btn " + this.props.className} >
					{this.props.title} <span className={this.props.subtitleClassName}>{this.props.subTitle}</span>
			   </button>
	}
});
