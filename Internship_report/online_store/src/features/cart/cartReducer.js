const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];

    case "Remove":
      const firstMatchIndex = state.indexOf(action.payload);
      return state.filter((item, index) => index !== firstMatchIndex);

    default:
      return state;
  }
};

export default cartReducer;
