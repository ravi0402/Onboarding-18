var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass(
{
	handleClick : function()
	{
		this.setState({ open : !this.state.open});
	},

	getInitialState: function()
	{
		return { open : true}
	},
	handleItemClick : function (item)
	{
		this.setState({
			setTitle : item , 
			open : false
		}) ;

	},

	render : function()
	{
		var list = this.props.items.map(function(item)
			{
				return <ListItem 
						item={item} 
						whenItemClicked = {this.handleItemClick}
						className={this.state.setTitle === item ? "active" : ""}
						 />
						
			}.bind(this));
		return <div className="dropdown">
		   <Button whenClicked = {this.handleClick} className="btn-default" title={this.state.setTitle ||this.props.title} subTitleClassName="caret" />
		   <ul className={"dropdown-menu " +  (this.state.open ? "show" : "")}>
		   		{list}
		   </ul>
		   </div>
	}
});