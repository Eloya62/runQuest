import React from "react";
import "../../General.css";

function Filter(props) {
  const event = props.event;
  const race = props.race;

  // Récupère l'élément input par son id
  var dateInput = document.getElementById("dateInput");

  // Obtient la date actuelle
  var currentDate = new Date();

  // Formatte la date pour l'attribut min de l'input type month (YYYY-MM)
  var minDate = currentDate.toISOString().slice(0, 7);

  return (
    <div>
      <div class="search">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nom"
              required
            ></input>

            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
      {event && (
        <div class="event ">
          <form class="flex flex-row flex-wrap p-2 my-2 shadow-inner drop-shadow-md">
            <label class="m-1">
              Date début :{" "}
              <input
                type="month"
                min={minDate}
                class="rounded-md border-solid border-2"
                name="dateBegin"
              />
            </label>
            <label class="m-1">
              Ville :{" "}
              <input
                type="text"
                class=" rounded-md border-solid border-2"
                name="city"
              />
            </label>
            <label class="m-1">
              Département :{" "}
              <input
                type="number"
                class="w-12 rounded-md border-solid border-2"
                name="department"
              />
            </label>
            <label class="m-1">
              Distance : 
              <select
                class="rounded-md border-solid border-2"
                name="distanceRange"
              >
                <option value="0-21">0-21 km</option>
                <option value="21-42">21-42 km</option>
                <option value="42-84">42-84 km</option>
                <option value="84-168">84-168 km</option>
                <option value="168-and-more">168 km et plus</option>
              </select>
            </label>
            <button
              type="submit"
              class="m-1 border-solid border-2 border-blue-600 text-blue-600 rounded-xl p-1 px-4 submit-button"
            >
              valider
            </button>
          </form>
        </div>
      )}
      {race && (
        <div class="race">
          <form class="flex flex-row flex-wrap p-2 my-2 shadow-inner drop-shadow-md">
            <label class="m-1">
              Date début :{" "}
              <input
                type="month"
                min={minDate}
                class="rounded-md border-solid border-2"
                name="dateBegin"
              />
            </label>
            <label class="m-1">
              Ville :{" "}
              <input
                type="text"
                class=" rounded-md border-solid border-2"
                name="city"
              />
            </label>
            <label class="m-1">
              Département :{" "}
              <input
                type="number"
                class="w-12 rounded-md border-solid border-2"
                name="department"
              />
            </label>
            <label class="m-1">
              Distance : 
              <select
                class="rounded-md border-solid border-2"
                name="distanceRange"
              >
                <option value="0-21">0-21 km</option>
                <option value="21-42">21-42 km</option>
                <option value="42-84">42-84 km</option>
                <option value="84-168">84-168 km</option>
                <option value="168-and-more">168 km et plus</option>
              </select>
            </label>
            <button
              type="submit"
              class="m-1 border-solid border-2 border-blue-600 text-blue-600 rounded-xl p-1 px-4 submit-button"
            >
              valider
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Filter;
