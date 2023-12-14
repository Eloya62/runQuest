import React from "react";
import "../../General.css";
import Event from "../Event/Event";

function Events() {
  const events = [
    {
      title: "Event title1",
      dateBegin: "10/11/2021",
      location: "Bègles (33)",
    },
    {
      title: "Event title2",
      dateBegin: "20/11/2021",
      location: "Toulouse (31)",
    },
    {
      title: "Event title3",
      dateBegin: "30/11/2021",
      location: "Agen (47)",
    },
    {
      title: "Event title4",
      dateBegin: "12/12/2021",
      location: "Lagny-sur-Marne (77)",
    },
    {
      title: "Event title5",
      dateBegin: "20/12/2021",
      location: "Paris (75)",
    },
    {
      title: "Event title6",
      dateBegin: "30/12/2021",
      location: "Marseille (13)",
    },

  ];

  return (
    <div class="overflow-y-auto custom-scrollbar max-h-96 shadow-inner">
      {events.map((event) => (
        <Event
          title={event.title}
          dateBegin={event.dateBegin}
          location={event.location}
        ></Event>
      ))}
    </div>
  );
}

export default Events;
