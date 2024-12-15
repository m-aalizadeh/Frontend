const intialValue = { user: {} };

const userReducer = (state = intialValue, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "DELETE_USER":
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default userReducer;
