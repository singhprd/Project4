var React = require('react');
var ReactDOMServer = require('react-dom/server');


// var Map = require('../map/googlemap');
var JobList = require('./JobList');
var InfoButton = require('./InfoButton');

var GoogleMap = React.createClass({

  map: null,
  // infowindow: null,

  //initial state of JobList component is not visible:
  getInitialState: function(){
    return {showJobList: false,
            showInfoButton: false,
            jobMarker: []
    }
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


  // renderInfoWindow:function(){
      
        
  // },



  setJobMarkerEmpty:function(){
    
    return this.setState({showInfoButton: false});
  },
  

  //add google info window:
  addInfoWindow: function( latLng, image){
    var marker = this.addMarker(latLng, image);
    marker.addListener('click', function(){
      var jobForViewing = [];
      this.props.jobs.filter(function(job){
        
        // console.log("latlng: ", latLng)
        if(job.company.position.lat == latLng.lat){
          // console.log("reached here")
          jobForViewing.push(job);
          
        }

        return jobForViewing;
      }.bind(this))
      this.setState({ showInfoButton: true, showJobList: false, jobMarker: jobForViewing});
      }.bind(this));
 
      
    },

  addMarkersForJobs:function(){
    //mapping the jobs to show information on map for each one:
    this.props.jobs.map(function(job){
      //getting the lat and lng for each job and displaying marker for that location on the map:
      var companyLat = job.company.position.lat;
      var companyLng = job.company.position.lng; 
      var image;
      if (job.courier_id === null){
        image = "images/green_marker.png";
      }
      if (job.courier_id !== null){
        image = null;
      }
      // this.addMarker({lat: companyLat, lng: companyLng}, image);

      return this.addInfoWindow({lat: companyLat, lng: companyLng}, image);

    }.bind(this));
  },  
  

  //method to show JobList component:
  revealJobs:function(){
      this.setState({ showJobList: true, showInfoButton:false});
  },

  componentDidMount:function(){
    this.createMap();
    this.render();
  },

  render:function(){
    
   this.addMarkersForJobs();

    return(
      <div className= "map">
        <button onClick = {this.revealJobs}>See Jobs</button>
        <button onClick = {this.findMe}>Find Me</button>
        <div className = "pure-u-1-1" ref="map_canvas" id="map_canvas">

        </div>
        <div>
        { this.state.showJobList ? <JobList onTakeJob={this.props.onTakeJob} onCanceljob = {this.props.cancelJob}jobs={this.props.jobs} /> : null }
       
        </div>
        <div>
        { this.state.showInfoButton ? <InfoButton onTakeJob={this.props.onTakeJob} onCancelJob={this.props.cancelJob} job={this.state.jobMarker} onCloseClick={this.setJobMarkerEmpty} /> : null }
        </div>
      
      </div>
      )
      }
  

})


module.exports = GoogleMap;