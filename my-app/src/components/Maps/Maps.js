import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

let latitude;
let longitude;


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: latitude, lng: longitude }}
  >
  </GoogleMap>
))

class Maps extends React.Component {
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

function Map () {
  if (navigator.geolocation) {
    // L'API de géolocalisation est disponible
    navigator.geolocation.getCurrentPosition(
      function(position) {
        // Récupérer les coordonnées
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
  
        // Faire quelque chose avec les coordonnées
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      function(error) {
        // Gestion des erreurs
        latitude =  48.8566;
        longitude = 2.3522 ;
      }
    );
  };
  let map = new Maps();
  return map;
}