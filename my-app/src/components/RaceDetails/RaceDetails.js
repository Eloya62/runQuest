import React from "react";
import "../../General.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

function RaceDetails() {
  const location = useLocation();
  const {
    title,
    date,
    location: locationRace,
    description,
    distance,
    positiveElevation,
    negativeElevation,
    longitude,
    latitude,
  } = location.state;

  return (
    <div class="overflow-y-auto custom-scrollbar shadow-inner">
      <NavBar />
      <div className="event m-10 shadow-lg p-8 bg-white">
        <div className="m-4">
          <div className="event__info flex justify-between">
            <div>
              <h2 className="event__title mb-4 text-xl">
                <b>{title}</b>
              </h2>
              <p className="event__location">{locationRace}</p>
              <p className="event__distance">Distance de {distance}</p>
              <p className="event__elevation mt-4">
                Dénivelé positif : {positiveElevation}
              </p>
              <p className="event__elevation">
                Dénivelé négatif : {negativeElevation}
              </p>
            </div>
            <p className="event__date">Date : {date}</p>
          </div>

          <p className="text-md mt-8">
            <b>Description :</b>
          </p>
          <p className="event__description shadow-inner p-4">{description}</p>
          <div class="mt-8">
            <p className="event__longitude">Longitude : {longitude}</p>
            <p className="event__latitude">Latitude : {latitude}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceDetails;
