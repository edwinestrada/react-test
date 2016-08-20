var React = require('react');
var Packery = require('react-packery-component')(React);

var packeryOptions = {
  transitionDuration: '0.5s',
  itemSelector: '.grid-item',
  gutter: 10
};

var Gallery = React.createClass({
  render: function () {
    var childElements = this.props.elements.map(function(element, i){
      return (
        <div key={i} className="grid-item">
          <img src={element.src} />
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
        {childElements}
      </Packery>
    );
  }
});

module.exports = Gallery;
