import React, { Component } from 'react';
import {GoogleMap,Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers:[]
  };

  onMarkerClick = (props, marker, e) =>{
    debugger;
    return(
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  )};

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  componentDidMount(){
    this.setState({markers: [        
      {"lat": -31.563910, "lng": 147.154312,"Icon":'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png',name:'TS-User'},
      {"lat": -33.718234, "lng": 150.363181,"Icon":'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png',name:'TS-User'},
      {"lat": -33.727111, "lng": 150.371124,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -33.848588, "lng": 151.209834,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -33.851702, "lng": 151.216968,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -34.671264, "lng": 150.863657,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -35.304724, "lng": 148.662905,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -36.817685, "lng": 175.699196,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -36.828611, "lng": 175.790222,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -37.750000, "lng": 145.116667,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -37.759859, "lng": 145.128708,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -37.765015, "lng": 145.133858,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      {"lat": -37.770104, "lng": 145.143299,"Icon":'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',name:'supplier'},
      
    ]})
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <Map centerAroundCurrentLocation={false} google={this.props.google} zoom={2}>
          {this.state.markers.map((marker,i) => {
              debugger;
              return(
              <Marker
              key={i}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={marker.Icon}
              onClick={this.onMarkerClick}
             /> 
           ) })
         }

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDZSVnT-Oaft2Stx72a_OG0DN8_Z-9-d48'
})(MapContainer);
