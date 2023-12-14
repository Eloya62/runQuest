import React from "react";
import "../../General.css";
import Event from "../Event/Event";

function Events() {
  const events = [
    {
      title: "Event title1",
      date: "10/11/2021",
      location: "Bègles (33)",
    },
    {
      title: "Event title2",
      date: "20/11/2021",
      location: "Toulouse (31)",
    },
    {
      title: "Event title3",
      date: "30/11/2021",
      location: "Agen (47)",
    },
    {
      title: "Event title4",
      date: "12/12/2021",
      location: "Lagny-sur-Marne (77)",
    },
    {
      title: "Event title5",
      date: "20/12/2021",
      location: "Paris (75)",
    },
    {
      title: "Event title6",
      date: "30/12/2021",
      location: "Marseille (13)",
    },

  ];

  return (
    <div className="max-h-600 overflow-scroll custom-scrollbar">
      {events.map((event) => (
        <Event
          title={event.title}
          date={event.date}
          location={event.location}
        ></Event>
      ))}
    </div>
  );
}

export default Events;
