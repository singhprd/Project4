var React = require('react');

// var Map = require('../map/googlemap');
var JobList = require('./JobList');

var GoogleMap = React.createClass({

  map: null,
  // infowindow: null,
  

  createMap:function(){
    

    var canvas = this.refs["map_canvas"];


  //this is happening in component did mount so not sure it knows what the props are yet? in any case this needs to be a general Edinburgh center view or the location of the user:
    return (this.map = new google.maps.Map(canvas, {
      center: {
        "lat": 55.946967,
        "lng": -3.202021
      },
      
      zoom: 14
    }));



  },

  findMe:function(){
    var canvas = this.refs["map_canvas"];

            navigator.geolocation.getCurrentPosition(function(position){
            var currentLat = position.coords.latitude;
            var currentLng = position.coords.longitude;
            var userLocation = {lat: currentLat, lng: currentLng};
            // return (this.map = new google.maps.Map(canvas, {center:userLocation, zoom: 16}));
            // this.addMarker( userLocation);

            var marker = this.addMarker(userLocation, "images/green-arrow.png");
            marker.addListener('click', function(){
              var myInfoWindow = new google.maps.InfoWindow({
                content: "I am here"
            
              });
              myInfoWindow.open(this.map, marker);

            })
          }.bind(this))
        
  },

  addMarker:function(latLng, image){
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: image

      });
      return marker;
      
  },

//this does not work, scoping issue?
  clickInfoWindow:function(){
      console.log("info window clicked");
      return [];
  },


  addInfoWindow: function( latLng, title){
    var marker = this.addMarker(latLng, "", title);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: "",
   
      });

      //the content of info windows has to be a string:
      infoWindow.setContent('<p>Job Details: '+title+'</p>' +
                                           
                          '<button onClick="this.clickInfoWindow()"> Confirm</button>');
      
      infoWindow.open(this.map, marker);
    });
  },



  componentDidMount:function(){
    this.createMap();
    
    
  },
  


  render:function(){
    //mapping the jobs to show information on map for each one:
    this.props.jobs.map(function(job){
      //getting the lat and lng for each job and displaying marker for that location on the map:
      var companyLat = job.company.position.lat;
      var companyLng = job.company.position.lng; 
      this.addMarker({lat: companyLat, lng: companyLng});
      
      //getting the company name and category for each job and populating the info window with these details:
      var companyName = job.company.name;
      var jobType = job.category;
      var infoWindowContent = companyName.toString() + " " + jobType.toString();
      return this.addInfoWindow({lat: companyLat, lng: companyLng}, infoWindowContent);

    }.bind(this));


    //old way of doing it:

    // var companyName = this.props.jobs.map(function(job){
    //     return (job.company.name);
    // });

    // var companyLat = this.props.jobs.map(function(job){
    //     return (job.company.position.lat);
    // });

    // var companyLng = this.props.jobs.map(function(job){
    //     return (job.company.position.lng);
    // });

    // var jobType = this.props.jobs.map(function(job){
    //     return (job.category);
    // });

    //taking the mapped info into 
    // var infoWindowContent = companyName.toString() + " " + jobType.toString();
    // var companyLatMap = companyLat.pop();
    // var companyLngMap = companyLng.pop();
       
    // this.addMarker({lat: companyLatMap, lng: companyLngMap});

    // this.addInfoWindow({lat: companyLatMap, lng: companyLngMap}, infoWindowContent);

    return(
      <div className= "map">
      <h4>Map</h4>
        <button onClick = {this.findMe}>Find Me</button>
        <div ref="map_canvas" id="map_canvas">

        </div>
        <div>
        <JobList jobs={this.props.jobs}/>
        </div>
      


      </div>
      )
      }
  

})


module.exports = GoogleMap;