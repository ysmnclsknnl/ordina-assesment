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
          <div>
            {topCountries(flightData.states).map((state, index) => (
              <p key={index}>{state}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
