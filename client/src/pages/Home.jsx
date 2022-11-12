import React from "react";
import { useState, useEffect } from "react";
import { netherlandsFlightURL } from "../contants";
import { topCountries } from "../utilities/topCountries";

const Home = () => {
  const [flightData, setFlightData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);
      try {
        const data = await fetch(url, {
          headers: {
            Authorization: "Basic eWFzZW1pbmNhbGlza2FuOkh5ZmNsYXNzMzcu",
          },
        });
        const json = await data.json();
        console.log(json);
        //get icao24, origin Country and longtitude and latitude from the states property of json
        const dataToProcess=json.states.map(state=>state.filter(element=>[0,2,5,6].includes(element)))
        setFlightData(json);
       
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(netherlandsFlightURL);
  }, []);


 
  return (
    <div>
      <p>The Netherlands Flights</p>
      {flightData && (
        <div>
          <p>{` Number Of Flights Now :${flightData.states.length}`}</p>
          <h2>Countries:</h2>
          { 
   topCountries(flightData.states).map(country=><p key={country.name}> {`${country.name} : ${country.value}`}</p>)
  }
        </div>
      )}
    </div>
  );
};

export default Home;
