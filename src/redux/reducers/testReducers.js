const initialState = {
  data: "This data will replaced by Redux with Promise",
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_VALUE_FULFILLED":
      console.log("UPDATE_VALUE_FULFILLED");
      state = { ...state, data: action.payload };
      break;

    default:
      break;
  }

  return state;
};

export default testReducer;
