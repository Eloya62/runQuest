import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

class Map extends React.Component {
    render() {
      return (
        <div className="App">
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBy-09ACsQwuveI6gntq2XHMlaxv2EE9pw"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px`, width: `500px`}} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    }
  }
export default Map;