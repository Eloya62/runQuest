import React from "react";
import "../../General.css";
import { Link } from "react-router-dom";

function Race(props) {
  const propsRace = props.props;
  console.log("RACE ",propsRace);

  function formatDate(date) {
    var dateBegin = new Date(date);
    var day = dateBegin.getDate();
    var month = dateBegin.getMonth() + 1;
    var year = dateBegin.getFullYear();
    return day + "/" + month + "/" + year;
  }

  const toLink = {
    pathname : "/race-details",
    search: "?id=" + propsRace.id_course,
  }

  return (
    <Link
    to={toLink} state={{ title: propsRace.nom_course, dateBegin: propsRace.date_course, region: propsRace.region, description: propsRace.descr, departement: propsRace.departement }}
    >
      <div className="race shadow-md p-2 m-2 bg-white">
        <div className="m-4">
          <div className="race__info flex justify-between">
            <div>
              <h2 className="race__title">
                <b>{propsRace.nom_course}</b>
              </h2>
              <p className="race__location">{propsRace.departement?propsRace.departement:""} {propsRace.region?propsRace.region:""}</p>
            </div>
            <div>
              <p className="race__date">{propsRace.date_course?formatDate(propsRace.date_course):""}</p>
              <p className="race__distance">{propsRace.distance_m+ " m"}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Race;
