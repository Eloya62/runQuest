import React from "react";
import "../../General.css";
import Filter from "../Filter/Filter";
import Events from "../Events/Events";
import Races from "../Races/Races";

function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-4 m-8">
      <div class="events shadow-lg">
        <div class="m-8">
          <Filter event={true}> </Filter>

          <Events></Events>
        </div>
      </div>

      <div class="races shadow-lg">
        <div class="m-8">
          <Filter race={true}> </Filter>
          <Races></Races>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
