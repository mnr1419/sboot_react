const intialState = {
  employees: [],
};

const apireducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return state;
    default:
      return state;
  }
};
export default apireducer;
