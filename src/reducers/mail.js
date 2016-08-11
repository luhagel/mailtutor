const initialState = { activemail: {} };

const actionsMap = {
  setActive(state, action) {
    const activeMail = action.key;
    return activeMail;
  }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
