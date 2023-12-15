import React, { useState } from "react";
import "../../General.css";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

export const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [dateBegin, setDateBegin] = useState("");
  const [dateEnding, setDateEnding] = useState("");
  const [ville, setVille] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Move this line to the beginning

    if (
      eventName === "" ||
      department === "" ||
      ville === "" ||
      description === "" ||
      dateBegin == null ||
      dateEnding == null
    ) {
      alert("Please fill out all fields");
      return;
    }
    //TODO : check dates are date

    const data = new FormData();
    // TODO : check values and add admin or organiser name
    data.append("nom_event", eventName);
    data.append("date_debut", dateBegin);
    data.append("date_fin", dateEnding);
    data.append("ville", ville);
    data.append("departement", department);
    data.append("descr", description);

    const url = "http://localhost:5000/create-event.php";
    axios
      .post(url, data)
      .then((response) => {
        // Access the response data
        const responseData = response.data;

        // Check if there is an error
        if (responseData.error) {
          alert(responseData.error);
        } else {
          // Registration was successful
          alert(responseData.success);

          // Redirect to another page (you can replace the URL below)
          window.location.href = "/create-event";
        }
      })
      .catch((error) => {
        // Handle the error
        console.error("An error occurred:", error);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="Connect" class="m-10 shadow-lg p-8 bg-white">
        <p class="mb-4 text-xl">
          <b>Créer un évènement</b>
        </p>

        <form
          class=" p-2 my-2 shadow-inner drop-shadow-md"
          onSubmit={handleSubmit}
        >
          <div class="flex flex-row justify-start content-center items-center space-x-4 space-y-4 flex-wrap">
            <label class=" ml-4 mt-4">
              Nom de l'évènement :{" "}
              <input
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                type="text"
                name="eventName"
                class="rounded-md border-solid border-2"
              />
            </label>
            <label>
              Date de début:{" "}
              <input
                value={dateBegin}
                onChange={(e) => setDateBegin(e.target.value)}
                type="date"
                name="dateBegin"
                class=" rounded-md border-solid border-2"
              />
            </label>
            <label>
              Date de fin :{" "}
              <input
                value={dateEnding}
                onChange={(e) => setDateEnding(e.target.value)}
                type="date"
                name="dateEnding"
                class=" rounded-md border-solid border-2"
              />
            </label>
            <label>
              Ville :{" "}
              <input
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                type="text"
                name="ville"
                class=" rounded-md border-solid border-2"
              />
            </label>
            <label>
              Département :{" "}
              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                type="text"
                name="department"
                class=" rounded-md border-solid border-2"
              />
            </label>
          </div>
          <div class="mt-8">
            <label>
              Description :{" "}
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                class=" rounded-md border-solid border-2 w-full h-32"
              />
            </label>
            <button
              type="submit"
              class="m-1 border-solid border-2 border-blue-600 text-blue-600 rounded-xl p-1 px-4 hover:text-sky-500 hover:border-sky-500"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
