export const getTotalFlights = (flightData) => {
  const totalTimeAllocated =
    (flightData[flightData.length - 1]["time"] - flightData[0]["time"]) /
    (60 * 60);

  //remove the duplicates of the flight numbers (icao24) and get correct total flight numbers
  const totalFlights = flightData
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

  return Math.round(totalFlights / totalTimeAllocated);
};
