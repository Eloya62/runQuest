import React, {useEffect} from "react";
import "../../General.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

function RaceDetails(props) {


  const id_course = window.location.search.split("=")[1];

  const propsRace = props.props;
  console.log("info race ", propsRace);

  const url = "http://localhost:5000/get-race.php";
  const [race, setRace] = React.useState([]); 
  
  const fetchData = async () => {
    const response = await fetch(`${url}?id=${id_course}`);
    const data = await response.json();
    console.log("course ",data);
    setRace(data);
  };

  console.log("coursesss ", race);

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

      {
        race.map((info) =>(
          <div className="event m-10 shadow-lg p-8 bg-white">
        <div className="m-4">
          <div className="event__info flex justify-between">
            <div>
              <h2 className="event__title mb-4 text-xl">
                <b>{info.nom_course}</b>
              </h2>
              <p className="event__location">{info.departement + " (" + info.region + ")"}</p>
              <p className="event__distance">Distance de {info.distance_m}</p>
              <p className="event__elevation mt-4">
                Dénivelé positif : {info.d_plus}
              </p>
              <p className="event__elevation">
                Dénivelé négatif : {info.d_minus}
              </p>
            </div>
            <p className="event__date">Date : {info.date_course}</p>
          </div>

          <p className="text-md mt-8">
            <b>Description :</b>
          </p>
          <p className="event__description shadow-inner p-4">{info.descr}</p>
          <div class="mt-8">
            <p className="event__longitude">Longitude : {info.longitude}</p>
            <p className="event__latitude">Latitude : {info.latitude}</p>
          </div>
        </div>
      </div>
        ))
      }
      
    </div>
  );
}

export default RaceDetails;
