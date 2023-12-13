import React from "react";
import "../../General.css";

function Event(props) {
  const { title, date, location } = props;

  return (
      <div className="event shadow-md p-2">
        <div className="m-4">
          <div className="event__info flex justify-between">
            <div>
              <h2 className="event__title">{title}</h2>
              <p className="event__location">{location}</p>
            </div>
            <p className="event__date">{date}</p>
          </div>
        </div>
      </div>

  );
}

export default Event;
