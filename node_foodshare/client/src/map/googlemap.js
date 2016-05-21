// /create a map constructor object:
// //pass in a latlong and a zoom:
var Map = function(latLng, zoom) {
  
  this.googleMap = new google.maps.Map( document.getElementById('map'), {
    center: latLng,
    zoom: zoom

  })


  // this.addMarker = function (latLng, label, title) {
  //   //let's add a marker on the map using google objects again:
  //   //takes 2 arguments: position and where to put it (on our map)
  //   var marker = new google.maps.Marker({
  //     position: latLng,
  //     map: this.googleMap,
  //     //label can be string value:
  //     label: label,
  //     title: title,
  //     draggable: true,
  //     animation: google.maps.Animation.DROP
  //   });
  //   //return the marker at the end so we can do something with it in other functions
  //   return marker;
  // }
  

  // this.bindClick = function(){

  //   //event object in google which takes an event listener method. First arg binds the event to where it happens, instance of map and the second arg is the event that is going to happen and it recognises 'click', and the third is the callback function. If you change it to mousemove it goes crazy!:

  //   //the other option instead of bind.this is to create a variable here, while it still remembers what is going on is var that = this and change addMarker to that.addMarker
  //   google.maps.event.addListener(this.googleMap, 'click', function(userClick){
  //     var clickLat = userClick.latLng.lat();
  //     var clickLng = userClick.latLng.lng();
  //     this.addMarker({lat: clickLat, lng: clickLng}, "");
   

  //     //event in bracket can be called anything and so have changed it to userClick, but if refers to the clicking. lat refers to method on the latLng object
  //     }.bind(this) ) 
  // }

  //addListener is a google method, i think you can use either version with or without event. it takes a callback method as here:
  // this.addInfoWindow = function( latLng, title){
  //   var marker = this.addMarker(latLng, "", title);
  //   marker.addListener('click', function(){
  //     //adding a google constructor for info window which takes an object as an argument, which has a property of content:
  //     var infoWindow = new google.maps.InfoWindow({
  //       content: this.title,
  
     
  //     });
  //     //tell the window to display using open function,and tell it what map to open on. this.map refers to the variable map set inside the marker:
  //     infoWindow.open(this.map, marker);
  //   });
  // }



}

module.exports = Map;