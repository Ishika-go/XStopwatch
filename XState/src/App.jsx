// import { useState,useEffect } from 'react'
// import axios from "axios";
// import './App.css'

// function App() {
//   const[countries, setCountries] = useState([]);
//   const[states,setStates] = useState([]);
//   const[cities,setCities] = useState([]);
//   const[selectedCountry, setselectedCountry] = useState("");
//   const[selectedState, setselectedState] = useState("");
//   const[selectedCity, setselectedCity] = useState("");




// useEffect(() => {
//   async function fetchData() {
//     try {
//       const res = await axios.get(
//         "https://crio-location-selector.onrender.com/countries"
//       );
//       setCountries(res.data);
//     } catch (err) {
//       console.log("Error: ", err);
//     }
//   }

//   fetchData(); 
// }, []);

// useEffect(() => {
//   (async function () {
//     if (selectedCountry) {
//       try {
//         const res = await axios.get(
//           `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
//         );
//         setStates(res.data);
//         setselectedState("");
//         setCities([]);
//         setselectedCity("");
//       } catch (err) {
//         console.log("Error: ", err);
//       }
//     }
//   })();
// }, [selectedCountry]);

// useEffect(() => {
//   (async function () {
//     if (selectedState) {
//       try {
//         const res = await axios.get(
//           `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
//         );
//         setCities(res.data);
//         setselectedCity("");
//       } catch (err) {
//         console.log("Error: ", err);
//       }
//     }
//   })();
// }, [selectedState]);

//   return (
//     <>
//     <div>
//     <select  onChange={(e)=>{setselectedCountry(e.target.value)}}>
//       <option value="" disabled selected>
//               Select Country
//             </option>
//         {countries.map((country) => (
//                 <option key={country} value={country}>{country}</option>

//         ))}

//       </select>
//     </div>

//     <div>
//     <select  disabled={!selectedCountry} onChange={(e)=>{setselectedState(e.target.value)}}>
//       <option value="" disabled selected>
//               Select State
//             </option>
//         {states.map((state) => (
//                 <option key={state} value={state}>{state}</option>

//         ))}

//       </select>
//     </div>
//     <div>
//     <select  disabled={!selectedCountry && !selectedState} onChange={(e)=>{setselectedCity(e.target.value)}}>
//       <option value="" disabled selected>
//               Select City
//             </option>
//         {cities.map((city) => (
//                 <option key={city} value={city}>{city}</option>

//         ))}

//       </select>
//     </div>


//     </>
//   )
// }

// export default App
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import axios from "axios";
import styles from "./styles.module.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(
          "https://crio-location-selector.onrender.com/countries"
        );
        setCountries(res.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    })();
  }, []);
  useEffect(() => {
    (async function () {
      if (selectedCountry) {
        try {
          const res = await axios.get(
            `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
          );
          setStates(res.data);
          setSelectedState("");
          setCities([]);
          setSelectedCity("");
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    })();
  }, [selectedCountry]);
  useEffect(() => {
    (async function () {
      if (selectedState) {
        try {
          const res = await axios.get(
            `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
          );
          setCities(res.data);
          setSelectedCity("");
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    })();
  }, [selectedState]);
  return (
    <div className={styles.wrapper}>
      <h2>Select Location</h2>
      <div className={styles.container}>
        <div>
          <select
            className="selectors"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="" disabled selected>
              Select Country
            </option>

            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="selectors"
            disabled={!selectedCountry}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="" disabled selected>
              Select State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="selectors"
            disabled={!selectedCountry && !selectedState}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled selected>
              Select City
            </option>
            {cities && cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          
        </div>
      </div>
      <div>
            {selectedCity && selectedCountry && selectedState && (
              <p>
                You selected <b>{selectedCity}</b>,{" "}
                <span>
                  {selectedState}, {selectedCountry}
                </span>
              </p>
            )}
          </div>
    </div>
  );
}

export default App;