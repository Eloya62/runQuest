import React from "react";
import "../../General.css";

function Event() {
  return (
      <div class="event shadow-lg">
        <div class="m-8">
          <div class="race__info">
            <h2 class="race__title">Race title</h2>
            <p class="race__description">Race description</p>
            <p class="race__date">Race date</p>
            <p class="race__location">Race location</p>
          </div>
        </div>
      </div>
  );
}

export default Event;
