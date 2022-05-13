import { REGISTER_FAILED, REGISTER_Sucsess, User_load } from "../actionsTypes/useractiontype";
const initialState = {
  currentUser: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case User_load:
      return { ...state, loading: true };
    case REGISTER_Sucsess:
      return { ...state, loading: false, currentUser: payload.user };
    case REGISTER_FAILED:
      return { ...state, loading: false, error: payload };
      default:
      return state;
  }
};
export default userReducer;