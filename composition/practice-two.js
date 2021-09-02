const makeFaucetSound = () => ({
  sound: () => {
    return "Drip drip drip."
  }
});
const makeOldCarSound = () => ({
  sound: () => {
    return "Grumble grumble"
  }
});
const makeSleepyBearSound = () => ({
  sound: () => {
    return "Grrr...yawn"
  }
});

const faucet = () => {

  return { ...makeFaucetSound() };
};

const oldCar = () => {

  return { ...makeOldCarSound()};
};

const sleepyBear = () => {

  return {...makeSleepyBearSound() };
};