var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass(
{
	render : function()
	{
		var list = this.props.thumbnails_data.map(function(eachThumbnail)
		{
			return <Thumbnail  {...eachThumbnail} />
		});

		return <div>{list}</div>

	}
	
});