import React, { useState, useRef, useEffect } from "react";
import "../../General.css";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

export const CreateRace = () => {
  const [raceName, setRaceName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [posDrop, setPosDrop] = useState("");
  const [negDrop, setNegDrop] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [department, setDepartment] = useState("");
  const [region, setRegion] = useState("");
  const date = new Date().toISOString().slice(0, 10);

  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();


  useEffect(() => {
    setErrMsg("");
  }, []);

  function handleErrors(error) {
    switch (error.status) {
      case 400:
        setErrMsg("Missing username or password");
        break;
      case 401:
        setErrMsg("Unauthorized");
        break;
      case 403:
        setErrMsg("Forbidden");
        break;
      default:
        setErrMsg("Login failed; Please contact an administrator at admin@example.com");
    };
    if (error.error) {
      setErrMsg(error.error);
    }
    
    errRef.current.scrollIntoView({ behavior: "smooth" });
    errRef.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Move this line to the beginning

    if (
      raceName === "" ||
      department === "" ||
      region === "" ||
      location === "" ||
      description === "" ||
      distance == null ||
      posDrop == null ||
      negDrop == null ||
      longitude == null ||
      latitude == null
    ) {
      alert("Please fill out all fields");
      return;
    }
    if (
      isNaN(distance) ||
      isNaN(posDrop) ||
      isNaN(negDrop) ||
      isNaN(longitude) ||
      isNaN(latitude)
    ) {
      alert(
        "Numeric values aren't filled with numbers. Please only put numbers inside the numerical fields"
      );
      return;
    }
    if (distance <= 0) {
      alert("The distance cannot be of 0 or less");
      return;
    }
    if (posDrop < negDrop) {
      alert(
        "The positive drop's value must be above the negative drop's value"
      );
      return;
    }
    //TODO : check dateStart is date

    const data = new FormData();
    // TODO : check values and add admin or organiser name
    data.append("nom_course", raceName);
    data.append("location", location);
    data.append("descr", description);
    data.append("distance_m", distance);
    data.append("d_plus", posDrop);
    data.append("d_minus", negDrop);
    data.append("lon", longitude);
    data.append("lat", latitude);
    data.append("date_course", dateStart); //TODO check valid
    data.append("department", department);
    data.append("region", region);

    const url = "http://localhost:5000/create-race.php";
    axios
      .post(url, data)
      .then((response) => {
        if (response.data.error) {
          handleErrors(response.data);
        } else {
          // Access the response data
          const responseData = response.data;

          // Check if there is an error
          if (responseData.error) {
            alert(responseData.error);
          } else {
            // Registration was successful
            alert(responseData.success);

            // Redirect to another page (you can replace the URL below)
            window.location.href = "/create-race";
          }
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
        <p class="mb-4 text-xl"><b>Créer une course</b></p>
        <h1 ref={errRef} class={(errMsg ? "errMsg" : "hidden") + " " + "font-bold text-red-500 border-solid border-2 rounded-full border-red-600 text-center max-w-max break-words px-5"}>{errMsg}</h1>
        <form
          class=" p-4 my-4 shadow-inner drop-shadow-md"
          onSubmit={handleSubmit}
        >
          <div class="flex flex-row  justify-start space-x-4 content-center items-center space-y-4 flex-wrap">
            <label class=" ml-4 mt-4">
              Nom de la course :{" "}
              <input
                value={raceName}
                class="rounded-md border-solid border-2"
                onChange={(e) => setRaceName(e.target.value)}
                type="text"
                name="raceName"
              />
            </label>
            <label >
              Date de début :{" "}
              <input
                value={dateStart}
                class="rounded-md border-solid border-2"
                onChange={(e) => setDateStart(e.target.value)}
                type="date"
                name="startDate"
                min={date}
              />
            </label>
            <label >
              Distance :{" "}
              <input
                value={distance}
                class="rounded-md border-solid border-2"
                onChange={(e) => setDistance(e.target.value)}
                type="number"
                step="0.01"
                name="distance"
              />
            </label>
            <label>
              Dénivelé positif :{" "}
              <input
                value={posDrop}
                class="rounded-md border-solid border-2"
                onChange={(e) => setPosDrop(e.target.value)}
                type="number"
                step="0.01"
                name="posDrop"
              />
            </label>
            <label>
              Dénivelé négatif :{" "}
              <input
                value={negDrop}
                class="rounded-md border-solid border-2"
                onChange={(e) => setNegDrop(e.target.value)}
                type="number"
                step="0.01"
                name="negDrop"
              />
            </label>
            <label>
              Région :{" "}
              <input
                value={region}
                class="rounded-md border-solid border-2"
                onChange={(e) => setRegion(e.target.value)}
                type="text"
                name="region"
              />
            </label>
            <label>
              Département :{" "}
              <input
                value={department}
                class="rounded-md border-solid border-2"
                onChange={(e) => setDepartment(e.target.value)}
                type="text"
                name="department"
              />
            </label>
            <label>
              Longitude :{" "}
              <input
                value={longitude}
                class="rounded-md border-solid border-2"
                onChange={(e) => setLongitude(e.target.value)}
                type="number"
                step="0.01"
                name="longitude"
              />
            </label>
            <label>
              Latitude :{" "}
              <input
                value={latitude}
                class="rounded-md border-solid border-2"
                onChange={(e) => setLatitude(e.target.value)}
                type="number"
                step="0.01"
                name="latitude"
              />
            </label>
            <label>
              Location Info :{" "}
              <input
                value={location}
                class="rounded-md border-solid border-2"
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                name="location"
              />
            </label>
          </div>
          <div class="mt-8">
            <label>
              Description :{" "}
              <textarea
                value={description}
                class="rounded-md border-solid border-2 w-full h-32"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
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

export default CreateRace;
