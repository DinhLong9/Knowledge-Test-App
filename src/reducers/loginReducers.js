export const loginReducer = (state = false, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "Is_Login":
      return action.status;
    default:
      return state;
  }
};
