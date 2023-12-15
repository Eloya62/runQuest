import React, { useEffect } from "react";
import "../../General.css";
import Event from "../Event/Event";

function Events() {
  const url = "http://localhost:5000/get-events.php";
  const [events, setEvents] = React.useState([]); // [
  
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setEvents(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  

  const events_dummy_data = [
    {
      title: "Event title1",
      dateBegin: "10/11/2021",
      location: "Bègles (33)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultri",
      races : [
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
        },
        {
          title: "Race title5",
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
        },
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
        },
      ]
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
          props={event}
        ></Event>
      ))}
      
    </div>
  );
}

export default Events;
