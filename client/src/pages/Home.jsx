import React from "react";
import { useEffect } from "react";
import { getTopCountries } from "../utilities/topCountries";
import { useSelector, useDispatch } from "react-redux";
import { getFlightData } from "../store/slice";
import { getTotalFlights } from "../utilities/getTotalFlights";
import { getAltitudes } from "../utilities/getAltitudes";
import "./home.css";

const Home = () => {
  const { flightData } = useSelector((state) => state.mySlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(getFlightData());
    }, 5000);
    return () => {
      clearInterval(fetchInterval);
    };
  }, [dispatch]);

  if (flightData.length > 0) {
    return (
      <div className="home-container">
        <h1>The Flights Over Netherlands</h1>
        <section>
          <h2>Number Of Flights Per Hour</h2>
          {flightData.length > 1 && <p>{getTotalFlights(flightData)}</p>}
        </section>

        <section>
          <h2> Top 3 Countries:</h2>
          {getTopCountries(flightData).map(
            (country, index) =>
              country["name"] && (
                <p key={index}> {`${country["name"]} : ${country.value}`}</p>
              )
          )}
        </section>
        <section>
          <h2> Flight Number : Layer</h2>
          {getAltitudes(flightData).map(
            ({ flightNumber, warning, altitudeLayer }) =>
              altitudeLayer !== null && (
                <div className="flex-row" key={flightNumber}>
                  <p className={`${warning ? "warning" : ""}`}>
                    {flightNumber}
                  </p>
                  <p>{altitudeLayer}</p>
                </div>
              )
          )}
        </section>
      </div>
    );
  }
};

export default Home;
