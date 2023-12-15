import React from "react";
import "../../General.css";
import { Link } from "react-router-dom";

function Event(props) {
  const propsEvent = props.props;
  console.log(propsEvent.races);

  return (
    <Link to={{ pathname: "/event-details"}} state={{ title: propsEvent.title, dateBegin: propsEvent.dateBegin, location: propsEvent.location, description: propsEvent.description, races: propsEvent.races }}>
      <div className="event shadow-md p-2 m-2 bg-white" >
        
        <div className="m-4">
          <div className="event__info flex justify-between">
            <div>
              <h2 className="event__title"><b>{propsEvent.title}</b></h2>
              <p className="event__location">{propsEvent.location}</p>
            </div>
            <p className="event__date">{propsEvent.dateBegin}</p>
          </div>
        </div>
        
      </div>
    </Link>

  );
}

export default Event;
