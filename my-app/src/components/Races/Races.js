import React from "react";
import "../../General.css";
import Race from "../Race/Race";

function Races() {
  const races = [
    {
      title: "Race title1",
      date: "10/11/2021",
      location: "Bègles (33)",
      distance: "5km",
      positiveElevation: "100m",
      negativeElevation: "100m",
    },
    {
      title: "Race title2",
      date: "20/11/2021",
      location: "Toulouse (31)",
      distance: "10km",
      positiveElevation: "200m",
      negativeElevation: "200m",
    },
    {
        title: "Race title3",
        date: "30/11/2021",
        location: "Agen (47)",
        distance: "15km",
        positiveElevation: "300m",
        negativeElevation: "300m",
    }
  ];
  return (
    <div class="overflow-y-auto custom-scrollbar max-h-96 shadow-inner">
      {races.map((race) => (
        <Race
          title={race.title}
          date={race.date}
          location={race.location}
          distance={race.distance}
        ></Race>
      ))}
    </div>
  );
}

export default Races;
