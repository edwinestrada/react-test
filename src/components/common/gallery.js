var React = require('react');
var Packery = require('react-packery-component')(React);

var packeryOptions = {
  transitionDuration: '0.5s',
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  columnWidth: '.grid-sizer'
};

var number_of_columns = 2;

var gutterSizer = {
  width: 5
};

var itemWidth = 'calc((100% - ' + ((number_of_columns - 1)* gutterSizer.width) + 'px) / ' + number_of_columns + ')';

var gridItem = {
  width: itemWidth
};

var gridSizer = {
  width: gridItem.width
};

var imageStyle = {
  width: '100%'
};

var Gallery = React.createClass({
  render: function () {
    var childElements = this.props.elements.map(function(element, i){
      return (
        <div key={i} className="grid-item" style={gridItem}>
          <img src={element.src} style={imageStyle} />
        </div>
      );
    });

    return (
      <Packery
        className={'grid'} // default ''
        elementType={'div'} // default 'div'
        options={packeryOptions} // default {}
        disableImagesLoaded={false} // default false
      >
        <div className='gutter-sizer' style={gutterSizer}></div>
        <div className='grid-sizer' style={gridSizer}></div>
        {childElements}
      </Packery>
    );
  }
});

module.exports = Gallery;
