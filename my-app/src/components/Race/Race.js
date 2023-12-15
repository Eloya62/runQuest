import React from "react";
import "../../General.css";
import { Link } from "react-router-dom";

function Race(props) {
  const propsRace = props.props;

  return (
    <Link
      to={{ pathname: "/race-details" }}
      state={{
        title: propsRace.title,
        date: propsRace.date,
        location: propsRace.location,
        distance: propsRace.distance,
        positiveElevation: propsRace.positiveElevation,
        negativeElevation: propsRace.negativeElevation,
        description: propsRace.description,
        longitude: propsRace.longitude,
        latitude: propsRace.latitude,
      }}
    >
      <div className="race shadow-md p-2 m-2 bg-white">
        <div className="m-4">
          <div className="race__info flex justify-between">
            <div>
              <h2 className="race__title">
                <b>{propsRace.title}</b>
              </h2>
              <p className="race__location">{propsRace.location}</p>
            </div>
            <div>
              <p className="race__date">{propsRace.date}</p>
              <p className="race__distance">{propsRace.distance}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Race;
