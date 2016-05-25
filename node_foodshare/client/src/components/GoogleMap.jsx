var React = require('react');
var JobList = require('./JobList');
var InfoButton = require('./InfoButton');



var GoogleMap = React.createClass({
  map: null,
// infowindow: null,
//initial state of JobList component is not visible:
getInitialState: function(){
  return {showJobList: false,
    showInfoButton: false,
    jobMarker: [],
    markers: []
  }
},
createMap:function(){
  var canvas = this.refs["map_canvas"];

//default map position is Edinburgh city centre, map has to be created in component will mount:
return (this.map = new google.maps.Map(canvas, {
  center: {
    "lat": 55.946967,
    "lng": -3.202021
  },   
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.TERRAIN
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
  this.state.markers.push(marker);
  return marker;      
},
removeAllMarkers: function(map) {
  for (var i = this.state.markers.length - 1; i >= 0; i--) {
    this.state.markers[i].setMap(null);
  }
},
setJobMarkerEmpty:function(){
  this.setState({showInfoButton: false});
//too much?s
// location.reload(true);
},
//add google info window:
addInfoWindow: function( latLng, image){
  var marker = this.addMarker(latLng, image);
  marker.addListener('click', function(){
    var jobIndices = [];
    this.props.jobs.forEach(function(job, index){
      // console.log("latlng: ", latLng)
      if(job.company.position.lat == latLng.lat){
        // console.log("reached here")
        jobIndices.push(index);
      }
      // return jobIndices;
    }.bind(this))
    this.setState({ showInfoButton: true, showJobList: false, jobMarker: jobIndices});
  }.bind(this));
},
addMarkersForJobs:function(){
  this.removeAllMarkers();
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
//method to hide JobList component:
hideJobs:function(){
  this.setState({showJobList: false});
},
componentWillMount: function(){
},
componentDidMount:function(){
  this.createMap();
  this.addMarkersForJobs();
},
render:function(){

 this.addMarkersForJobs();

 return(
  <div className= "map">
    <div className = "pure-u-1-1" ref="map_canvas" id="map_canvas">
    </div>
    <div>
      { this.state.showJobList ? <JobList onTakeJob={this.props.onTakeJob} jobs={this.props.jobs} onCompleteJob={this.props.onCompleteJob} onCancelJob={this.props.onCancelJob} address="true"/> : null }
    </div>
    <div>
      { this.state.showInfoButton ? <InfoButton onTakeJob={this.props.onTakeJob} onCancelJob={this.props.onCancelJob} onCompleteJob={this.props.onCompleteJob} jobIndices={this.state.jobMarker} jobs={this.props.jobs} onCloseClick={this.setJobMarkerEmpty} /> : null }
    </div>
    <button className="pure-button button-secondary" onClick = {this.revealJobs}>See Jobs</button>
    <button className="pure-button button-secondary" onClick = {this.hideJobs}>Hide Jobs</button>
    <button className="pure-button button-secondary" onClick = {this.findMe}>Find Me</button>
    <a className="pure-button button-secondary" href="javascript:location.reload(true)">Refresh Page</a>
  </div>
  )
}
})

module.exports = GoogleMap;