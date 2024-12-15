const addUser = (data) => ({
  type: "ADD_USER",
  payload: data,
});

const deleteUser = () => ({ type: "DELETE_USER" });

export const handleAddUser = (payload) => (dispatch) => {
  dispatch(addUser(payload));
};

export const handleDeleteUser = () => (dispatch) => {
  dispatch(deleteUser());
};
