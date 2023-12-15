import React from "react";
import "../../General.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

function EventDetails() {
  const location = useLocation();
  const {
    title,
    dateBegin,
    location: locationEvent,
    description,
    races,
  } = location.state;
  console.log(location.state.races);
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
              <p className="event__location">{locationEvent}</p>
            </div>
            <p className="event__date">Date : {dateBegin}</p>
          </div>
            <p className="text-md mt-8"><b>Description :</b></p>
          <p className="event__description shadow-inner p-4">{description}</p>
        </div>
      </div>
      <div class="m-10 shadow-lg p-8 bg-white">
        <h1 className="event__courses mb-4 text-xl"> <b>Courses</b></h1>
        <div class=" max-h-96 overflow-auto custom-scrollbar shadow-inner">
          {
            //afficher les courses
            races.map((race) => (
              <div className="race shadow-md p-2 m-2">
                <div className="m-4">
                  <div className="race__info flex justify-between">
                    <div>
                      <h2 className="race__title">
                        <b>{race.title}</b>
                      </h2>
                      <p className="race__location">{race.location}</p>
                    </div>
                    <div>
                      <p className="race__date">{race.date}</p>
                      <p className="race__distance">{race.distance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
