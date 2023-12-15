import React, {useEffect} from "react";
import "../../General.css";
import Race from "../Race/Race";

function Races() {
  const url = "http://localhost:5000/get-races.php";
  const [races, setRaces] = React.useState([]); // [
  
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("RACESS",data);
    setRaces(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  /*const races = [
    {
      title: "Race title1",
      date: "10/11/2021",
      location: "Bègles (33)",
      distance: "5km",
      positiveElevation: "100m",
      negativeElevation: "100m",
      longitude: "44.815",
      latitude: "-0.548",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
    },
    {
      title: "Race title2",
      date: "20/11/2021",
      location: "Toulouse (31)",
      distance: "10km",
      positiveElevation: "200m",
      negativeElevation: "200m",
      longitude: "43.604",
      latitude: "1.444",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
    },
    {
      title: "Race title3",
      date: "30/11/2021",
      location: "Agen (47)",
      distance: "15km",
      positiveElevation: "300m",
      negativeElevation: "300m",
      longitude: "44.203",
      latitude: "0.616",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
    },
  ];*/
  return (
    <div class="overflow-y-auto custom-scrollbar max-h-96 shadow-inner">
      {races.map((race) => (
        <Race props={race}></Race>
      ))}
    </div>
  );
}

export default Races;
