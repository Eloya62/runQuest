import React from "react";
import "../../General.css";

function Race(props) {
    const { title, date, location, distance } = props;

    return (
        <div className="race shadow-md p-2 m-2 bg-white">
          <div className="m-4">
            <div className="race__info flex justify-between">
              <div>
                <h2 className="race__title"><b>{title}</b></h2>
                <p className="race__location">{location}</p>
              </div>
              <div>
                <p className="race__date">{date}</p>
                <p className="race__distance">{distance}</p>
              </div>
              
            </div>
          </div>
        </div>
  
    );
}

export default Race;
