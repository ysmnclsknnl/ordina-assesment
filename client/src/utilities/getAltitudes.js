export const getAltitudes = (flightData) => {
  const pollingInterval = 60;

  //Latest Flight Data and The Layers Corresponding to Them
  const flightsPerLayer = flightData[flightData.length - 1]["states"].map(
    (state) => {
      return {
        flightNumber: state[0],
        verticalRate: state[2],
        warning:
          Math.floor(state[3] / 1000) !==
          Math.floor((state[3] + state[2] * pollingInterval) / 1000)
            ? true
            : false,
        altitude: state[3],
        altitudeLayer: state[3] !== null ? Math.floor(state[3] / 1000) : null,
      };
    }
  );
  console.log("LastFlightData");
  console.log(
    [...flightsPerLayer].sort((a, b) => a.altitudeLayer - b.altitudeLayer)
  );
  return [...flightsPerLayer].sort((a, b) => a.altitudeLayer - b.altitudeLayer);
};

// .reduce((accumulatedFlightsPerLayer, currentFlight) => {
//     if (!accumulatedFlightsPerLayer[`${currentFlight.altitudeLayer}`]) {
//       return {
//         ...accumulatedFlightsPerLayer,
//         [`${currentFlight.altitudeLayer}`]: [currentFlight.flightNumber],
//       };
//     }
//     return {
//       ...accumulatedFlightsPerLayer,
//       [`${currentFlight.altitudeLayer}`]: [
//         ...accumulatedFlightsPerLayer[`${currentFlight.altitudeLayer}`],
//         currentFlight.flightNumber,
//       ],
//     };
//   }, {});
