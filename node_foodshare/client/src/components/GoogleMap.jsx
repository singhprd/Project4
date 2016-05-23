var React = require('react');

// var Map = require('../map/googlemap');


var GoogleMap = React.createClass({

  map: null,
  // infowindow: null,
  

  createMap:function(){
    

    var canvas = this.refs["map_canvas"];

    // var lat = this.props.jobs.map(function(job, index){
    //   return job.company.position.lat;

    // });
    // var lng = this.props.jobs.map(function(job, index){
    //   return job.company.position.lng;
    // });
    return (this.map = new google.maps.Map(canvas, {
      center: {
        "lat": 55.946967,
        "lng": -3.202021
      },
      
      zoom: 14
    }));



  },

  addMarker:function(latLng){
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,

      });
      return marker;
      
  },


  


  addInfoWindow: function( latLng, title){
    var marker = this.addMarker(latLng, "", title);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: title,
   
      });
      
      infoWindow.open(this.map, marker);
    });
  },

  componentDidMount:function(){
    this.createMap();
    
    
  },
  


  render:function(){
    //getting info from props but this is going to need more work for more than one job
    var companyName = this.props.jobs.map(function(job){
        return (job.company.name);
    });

    var companyLat = this.props.jobs.map(function(job){
        return (job.company.position.lat);
    });

    var companyLng = this.props.jobs.map(function(job){
        return (job.company.position.lng);
    });

    //taking the mapped info into 
    var companyNameInfoWindow = companyName.toString();
    var companyLatMap = companyLat.pop();
    var companyLngMap = companyLng.pop();
       
    this.addMarker({lat: companyLatMap, lng: companyLngMap});

    this.addInfoWindow({lat: companyLatMap, lng: companyLngMap}, companyNameInfoWindow);

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