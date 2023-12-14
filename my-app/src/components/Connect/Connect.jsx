import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../Context/AppContext";
import "../../General.css";

export const Connect = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");


  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

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
    event.preventDefault();
    if (email === "" || password === "") {
      setErrMsg("Veuillez remplir tous les champs");
      return;
    }
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    const url = "http://localhost:5000/login.php";
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
          if (response.error) {
            handleErrors(response);
          } else
          {
            setErrMsg("Logged in !");
            const accessToken = response.accessToken;
            const admin = response.adminValue;
            const organisateur = response.organisateurValue;
            
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("admin", admin);
            localStorage.setItem("organisateur", organisateur);
            setAuth({email, password, accessToken, admin, organisateur});
            window.location.href = "/";
          }
        }
      )
      .catch((error) => {
        handleErrors(error);
      });
  }
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="logo.svg"
            alt="logo"
          />
          RunQuest
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connexion à ton compte
            </h1>
            <h1 ref={errRef} class={(errMsg ? "errMsg" : "hidden") + " " + "font-bold text-red-500 border-solid border-2 rounded-full border-red-600 text-center max-w-max break-words px-5"}>{errMsg}</h1>
            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ton email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={userRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                >
                 
                </input>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  ref={userRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    ></input>
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Souviens-toi de moi
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-[#F68E25] hover:underline dark:text-primary-600"
                >
                  Mot de passe oublié ?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <input type="submit" value="Connexion" />
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous n'avez pas de compte ?{" "}
                <a
                  href="create-account"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Inscription
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
