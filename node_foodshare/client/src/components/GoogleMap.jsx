var React = require('react');

// var Map = require('../map/googlemap');


var GoogleMap = React.createClass({

  createMap:function(){
    var coords = this.props.coords;
    var zoom = this.props.zoom;
    var center = new google.maps.LatLng(coords.lat, coords.lng);
    var canvas = this.refs["map_canvas"];
    return (new google.maps.Map(canvas, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
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