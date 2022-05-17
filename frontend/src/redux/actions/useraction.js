import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_Sucsess, USER_FAIL, User_load, USER_SUCCESS } from "../actionsTypes/useractiontype";
import axios from "axios";
export const registre = (newuser, navigate) => async(dispatch) => {
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
        console.dir(error)
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

export const loginUser = (user, navigate) => async (dispatch) => {
    dispatch({ type: User_load });
    try {
      const response = await axios.post("http://localhost:5000/user/login", user);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      // navigate("/");
      console.log(response.data.user.role);
      navigate(
        response.data.user.role === "admin"
          ? "/dachboardAdmin"
          : "/dachboardClient"
      );
    } catch (error) {
      console.dir(error);
  
      dispatch({ type: LOGIN_FAIL, payload: error });
    }
  };
  export const getUser = () => async (dispatch) => {
    dispatch({ type: User_load });
    try {
      const opts = {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      };
      const response = await axios.get(
        "http://localhost:5000/user/current",
        opts
      );
      dispatch({ type: USER_SUCCESS, payload: response.data.user });
    } catch (error) {
      console.dir(error);
      dispatch({ type: USER_FAIL, payload: error });
    }
  };
  
  export const logout = () => (dispatch) => {
    //remove the token from the localstorage
    
    dispatch({
      type: LOGOUT,
    });
  };