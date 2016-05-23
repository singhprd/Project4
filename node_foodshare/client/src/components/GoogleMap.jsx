var React = require('react');

// var Map = require('../map/googlemap');
var JobList = require('./JobList');

var GoogleMap = React.createClass({

  map: null,
  // infowindow: null,

  //initial state of JobList component is not visible:
  getInitialState: function(){
    return {showJobList: false};
  },
  

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

  //geolocation and click button to drop an arrow marker on your location:
  findMe:function(){
    //the map canvas div:
    var canvas = this.refs["map_canvas"];

    //geolocation:
    navigator.geolocation.getCurrentPosition(function(position){
      var currentLat = position.coords.latitude;
      var currentLng = position.coords.longitude;
      var userLocation = {lat: currentLat, lng: currentLng};

      //creating the new marker and dropping it on your location:
      var marker = this.addMarker(userLocation, "images/green-arrow.png");
      marker.addListener('click', function(){
        //info window on marker:
        var myInfoWindow = new google.maps.InfoWindow({
          content: "I am here" 
        });
        myInfoWindow.open(this.map, marker);
      })
      this.map.setCenter(marker.getPosition());
    }.bind(this))        
  },

  //add googlemap marker:
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
  },

  //add google info window:
  addInfoWindow: function( latLng, title){
    var marker = this.addMarker(latLng, "", title);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: ""
      });

    //the content of info windows has to be a string:
    infoWindow.setContent('<p>Job Details: '+title+'</p>');
    //i originally put button onclick here but have moved it to render:
      // infoWindow.setContent('<p>Job Details: '+title+'</p>' +
                                           
      // '<button onClick="this.clickInfoWindow()"> Confirm</button>');
      
      infoWindow.open(this.map, marker);
    });
  },

  //method to show JobList component:
  revealJobs:function(){
      this.setState({ showJobList: true});
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
      
      //getting the company name and category for each job and populating the info window with these details. Button not working:
      var companyName = job.company.name;
      var jobType = job.category;
      var location = job.company.contactDetails.address1;
      var infoWindowContent = companyName.toString() + " " + "(" + jobType.toString() + ")" + ' at ' + location + '<button onclick="this.revealJobs()"> Confirm</button>';
      return this.addInfoWindow({lat: companyLat, lng: companyLng}, infoWindowContent);

    }.bind(this));



    return(
      <div className= "map">
      <h4>Map</h4>
        <button onClick = {this.revealJobs}>See Jobs</button>
        <button onClick = {this.findMe}>Find Me</button>
        <div className = "pure-u-1-1" ref="map_canvas" id="map_canvas">

        </div>
        <div>
        { this.state.showJobList ? <JobList jobs={this.props.jobs} /> : null }
       
        </div>
      
      </div>
      )
      }
  

})


module.exports = GoogleMap;