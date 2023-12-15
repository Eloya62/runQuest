import React , { useEffect } from "react";
import "../../General.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function EventDetails() {
  const location = useLocation();
  const {
    title,
    dateBegin,
    ville,
    departement,
    description,

  } = location.state;

  // récupérer l'id de l'event dans l'url dans le get
  const id_event = window.location.search.split("=")[1];

  const url = "http://localhost:5000/get-races-events.php";
  const [races, setRaces] = React.useState([]); 
  
  const fetchData = async () => {
    const response = await fetch(`${url}?id=${id_event}`);
    const data = await response.json();
    console.log("course ",data);
    setRaces(data);
  };

  console.log("coursesss ", races);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  

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
              <p className="event__location">{ville?ville:""} {departement?("("+ departement+ ")"):""}</p>
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
              <Link to={{pathname: "/race-details", search: "?id="+race.id_course}} >
              <div className="race shadow-md p-2 m-2">
                <div className="m-4">
                  <div className="race__info flex justify-between">
                    <div>
                      <h2 className="race__title">
                        <b>{race.nom_course}</b>
                      </h2>
                      <p className="race__location">{race.departement + race.region}</p>
                    </div>
                    <div>
                      <p className="race__date">{race.date_course}</p>
                      <p className="race__distance">{race.distance_m}</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
