export const topCountries = (statesArray) => {
  //Get the number of Flights Corresponding to a country
  const countriesAndFlightNumbers = statesArray
    .map((state) => state[2])
    .reduce((accCountries, currentCountry) => {
      if (!accCountries[`${currentCountry}`]) {
        return { ...accCountries, [`${currentCountry}`]: 1 };
      }
      return {
        ...accCountries,
        [`${currentCountry}`]: accCountries[`${currentCountry}`] + 1,
      };
    }, {});

  //Create and array from contriesAndFlightNumbers object and sort it
  //Get top three Values
  const valuesOfFLights = Object.values(countriesAndFlightNumbers);
  const topThreeValues = [...valuesOfFLights].sort((a, b) => b - a).slice(0, 3);
  const firstValue = topThreeValues[0];
  const secondValue = topThreeValues[1];
  const thirdValue = topThreeValues[2];

  //Create and array from contriesAndFlightNumbers object ato get keys
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
