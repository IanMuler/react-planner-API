const State = require("./model");

function createState(state) {
  const newState = new State(state);
  return newState.save();
}

function getState() {
  return State.find();
}

async function updateState(id, state) {
  const updatedState = await State.findByIdAndUpdate(id, {
    state: state,
  });
  return updatedState;
}

module.exports = {
  create: createState,
  get: getState,
  update: updateState,
};
