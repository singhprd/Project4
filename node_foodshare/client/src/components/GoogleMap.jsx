var React = require('react');

// var Map = require('../map/googlemap');


var GoogleMap = React.createClass({

  createMap:function(){
    var canvas = this.refs["map_canvas"];
    return (new google.maps.Map(canvas, {
      center: this.props.coords,
      zoom: this.props.zoom
    }));

  },

  componentDidMount:function(){
    this.createMap();
  },
  


  render:function(){
    

    return(
      <div className= "map">
      <h4>Map is a little bit here</h4>
        <div ref="map_canvas" id="map_canvas">
        </div>


      


      </div>
      )
      }
  

})


module.exports = GoogleMap;