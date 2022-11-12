export const getTopCountries = (flightData) => {
  //Get the states property from flightData
  const statesArray = flightData
    .map((flight) => flight.states)
    .reduce((accumulatedStates, currentState) => {
      return [...accumulatedStates, ...currentState];
    }, []);
  console.log(statesArray);
  console.log("states Array above");
  //Get the number of Flights Corresponding to a country
  console.log("stateArray is");
  console.log(statesArray);
  const countriesAndFlightNumbers = statesArray
    .map((state) => state[1])
    .reduce((accCountries, currentCountry) => {
      if (!accCountries[`${currentCountry}`]) {
        return { ...accCountries, [`${currentCountry}`]: 1 };
      }
      return {
        ...accCountries,
        [`${currentCountry}`]: accCountries[`${currentCountry}`] + 1,
      };
    }, {});

  //Create and array from contriesAndFlightNumbers Object a
  const valuesOfFLights = Object.values(countriesAndFlightNumbers);
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
