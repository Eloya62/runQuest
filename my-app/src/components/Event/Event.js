import React from "react";
import "../../General.css";

function Event(props) {
  const { title, dateBegin, location } = props;

  return (
      <div className="event shadow-md p-2 m-2 bg-white">
        <div className="m-4">
          <div className="event__info flex justify-between">
            <div>
              <h2 className="event__title"><b>{title}</b></h2>
              <p className="event__location">{location}</p>
            </div>
            <p className="event__date">{dateBegin}</p>
          </div>
        </div>
      </div>

  );
}

export default Event;
