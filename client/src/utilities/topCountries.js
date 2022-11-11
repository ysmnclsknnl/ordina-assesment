export const topCountries = (statesArray) => {
  const distinctStates = statesArray
    .map((state) => state[2])
    .reduce((accStates, currentsState) => {
      if (!accStates.includes(currentsState)) {
        return [...accStates, currentsState];
      }
      return accStates;
    }, []);

  return distinctStates;
};
