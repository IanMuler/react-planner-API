const store = require("./store");

function createState(state) {
  if (!state) {
    console.error("[stateController] createState: missing state");
    return Promise.reject("Invalid state");
  }

  const _state = {
    state: state,
  };

  return store.create(_state);
}

function getState() {
  return store.get();
}

function updateState(id, state) {
  if (!id || !state) {
    console.error("[stateController] updateState: missing parameters");
    return Promise.reject("Invalid parameters");
  }

  return store.update(id, state);
}

module.exports = {
  createState,
  getState,
  updateState,
};
