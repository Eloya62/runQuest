import React from "react";
import "../../General.css";

function Event() {
  return (
    <div className="grid grid-cols-2 gap-4 m-8">
      <div class="event shadow-lg">
        <div class="m-8">
          <div class="event__info">
            <h2 class="event__title">Event title</h2>
            <p class="event__description">Event description</p>
            <p class="event__date">Event date</p>
            <p class="event__location">Event location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
