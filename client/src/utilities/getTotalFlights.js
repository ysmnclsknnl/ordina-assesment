// export const getTotalFlights = (flightData) => {
//   return flightData
//     .map((flight) => flight.states.length)
//     .reduce((accumulatedFlightNumber, currentFlightNumber) => {
//       return accumulatedFlightNumber + currentFlightNumber;
//     }, 0);
// };
export const getTotalFlights = (flightData) => {
  //Filter the flights in one hour
  const flightsInOneHour = flightData.filter((flight) => {
    const oneHourAgo = (new Date().getTime() - 1000 * 60 * 60)
      .toString()
      .slice(0, 10);
    return parseInt(flight.time) > parseInt(oneHourAgo.toString().slice(0, 10));
  });

  //get all the states in one hour
  //remove the duplicates of the flight numbers (icao24) and get correct flight numbers in one hour
  return flightsInOneHour
    .map((flight) => flight.states)
    .reduce((accumulatedStates, currentState) => {
      return [...accumulatedStates, ...currentState];
    }, [])
    .reduce((accumulatedIcao24, currentState) => {
      if (accumulatedIcao24.includes(currentState[0])) {
        return accumulatedIcao24;
      }
      return [...accumulatedIcao24, currentState[0]];
    }, []).length;
};
