import { REGISTER_FAILED, REGISTER_Sucsess, User_load } from "../actionsTypes/useractiontype";
import axios from "axios";
export const registre = (newuser, navigate) => async (dispatch) => {
    dispatch({
      type: User_load,
    });
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        newuser
      );
      dispatch({
        type: REGISTER_Sucsess,
        payload: response.data,
      });
      navigate("/login");
    } catch (error) {
      console.dir(error);
      error.response.data.errors.forEach((el) => {
        alert(el.msg);
      });
      dispatch({
        type: REGISTER_FAILED,
        payload: error.response.data,
      });
      if (error.response.data.msg) {
        alert(error.response.data.msg);
      }
    }
  };