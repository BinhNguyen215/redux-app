const counterReducer = (state = 0, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //   return state + action.payload;
    case "COMMIT_INCREMENT":
      return state + action.payload;
    case "ROLLBACK_INCREMENT":
      return state;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
