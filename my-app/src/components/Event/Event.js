import React from "react";
import "../../General.css";
import { Link } from "react-router-dom";


function Event(props) {
  const propsEvent = props.props;
  console.log(propsEvent.races);
  var role = localStorage.getItem("role");

  function formatDate(date) {
    var dateBegin = new Date(date);
    var day = dateBegin.getDate();
    var month = dateBegin.getMonth() + 1;
    var year = dateBegin.getFullYear();
    return day + "/" + month + "/" + year;
  }

  console.log("id ",propsEvent.id_event);

  const toLink = {
    pathname : "/event-details",
    search: "?id=" + propsEvent.id_event,
  }

  return (
    <Link to={toLink} state={{ title: propsEvent.title, dateBegin: propsEvent.dateBegin, ville: propsEvent.ville, description: propsEvent.description, departement: propsEvent.departement }}>
      <div className="event shadow-md p-2 m-2 bg-white" >
        
        <div className="m-4">
          <div className="event__info flex justify-between">
            <div>
              <h2 className="event__title"><b>{propsEvent.title?propsEvent.title:""}</b></h2>
              <p className="event__location">{(propsEvent.ville?propsEvent.ville:"") + (propsEvent.departement?("("+ propsEvent.departement+ ")"):"")}</p>
            </div>
            <div class="flex flex-end space-x-4">
              <p className="event__date">{propsEvent.dateBegin?formatDate(propsEvent.dateBegin):""}</p>
            
              {(role==="Administrateur") ? <div class="flex flex-col space-y-2"><img src="circle-xmark-regular.svg" class="h-8" alt="cross" /><img src="gear-solid.svg" class="h-8" alt="gear" /></div>: ""}
            </div>
          </div>
        </div>
        
      </div>
    </Link>

  );
}

export default Event;
