export const getTopCountries = (flightData) => {
  //Get the states property from flightData
  const statesArray = flightData
    .map((flight) => flight.states)
    .reduce((accumulatedStates, currentState) => {
      return [...accumulatedStates, ...currentState];
    }, []);

  //Get the number of Flights Corresponding to a country
  const countriesAndFlightNumbers = statesArray
    .map((state) => [state[0], state[1]])
    .reduce((accCountries, currentState) => {
      const currentIcao24 = currentState[0];
      const currentCountry = currentState[1];

      //If accumulatedCountries object does not have current country create a property with the name of the current country
      if (!accCountries[`${currentCountry}`]) {
        return { ...accCountries, [`${currentCountry}`]: [currentIcao24] };
      }
      //If accumulatedCountries object has a property with the name of the current country check if this property inludes the flight with the number of current icao24 number
      //If it inclues do not add
      if (accCountries[`${currentCountry}`].includes(currentIcao24)) {
        return accCountries;
      }
      //If it does not include add  the current flight number(icao24) to the property
      return {
        ...accCountries,
        [`${currentCountry}`]: [
          ...accCountries[`${currentCountry}`],
          currentIcao24,
        ],
      };
    }, {});

  //Create and array including the values from contriesAndFlightNumbers Object
  const valuesOfFLights = Object.values(countriesAndFlightNumbers).map(
    (element) => element.length
  );

  //Get top three Values by sorting the valuesofFlightsArray
  const topThreeValues = [...valuesOfFLights].sort((a, b) => b - a).slice(0, 3);
  const firstValue = topThreeValues[0];
  const secondValue = topThreeValues[1];
  const thirdValue = topThreeValues[2];

  //Create and array from contriesAndFlightNumbers Object to get keys
  //Get the keys of top three countries
  const keysOfFlights = Object.keys(countriesAndFlightNumbers);
  const firstCountry = keysOfFlights[valuesOfFLights.indexOf(firstValue)];
  const secondCountry = keysOfFlights[valuesOfFLights.indexOf(secondValue)];
  const thirdCountry = keysOfFlights[valuesOfFLights.indexOf(thirdValue)];

  return [
    { name: [`${firstCountry}`], value: firstValue },
    { name: [`${secondCountry}`], value: secondValue },
    { name: [`${thirdCountry}`], value: thirdValue },
  ];
};
