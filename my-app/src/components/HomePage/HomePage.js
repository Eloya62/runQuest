import React from "react";
import "../../General.css";
import Filter from "../Filter/Filter";
import Events from "../Events/Events";

function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-4 m-8">
      <div class="event shadow-lg">
        <div class="m-8">
          <Filter event={true}> </Filter>

          <Events></Events>
        </div>
      </div>

      <div class="race shadow-lg">
        <div class="m-8">
          <Filter race={true}> </Filter>
          <div class="race__info">
            <h2 class="race__title">Race title</h2>
            <p class="race__description">Race description</p>
            <p class="race__date">Race date</p>
            <p class="race__location">Race location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
