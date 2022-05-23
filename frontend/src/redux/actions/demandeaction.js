import axios from "axios";

import { ADD_DEMANDE_FAIL, ADD_DEMANDE_SUCCESS, DELETE_DEMANDE_FAIL, DELETE_DEMANDE_SUCCESS, GET_ALL_DEMANDE_CLIENT_FAIL, GET_ALL_DEMANDE_CLIENT_SUCCESS, GET_ALL_DEMANDE_FAIL, GET_ALL_DEMANDE_SUCCESS, GET_DEMANDE_FAIL, GET_DEMANDE_SUCCESS, LOAD_DEMANDE } from "../actionsTypes/demandeactiontype";


export const getAllDemande = () => async(dispatch) => {
    dispatch({ type: LOAD_DEMANDE });
    try {
        const opts = {
            headers: { Authorization: ` ${localStorage.getItem("token")}` },
        };
        const response = await axios.get("http://localhost:5000/demande/alldemande", opts);
        dispatch({ type: GET_ALL_DEMANDE_SUCCESS, payload: response.data });
        console.log(response.data)
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_DEMANDE_FAIL, payload: error });
    }
};
export const getAllDemandeClient = () => async(dispatch) => {
    dispatch({ type: LOAD_DEMANDE });
    try {
        const opts = {
            headers: { Authorization: ` ${localStorage.getItem("token")}` },
        };
        const response = await axios.get("http://localhost:5000/demande/alldemandeclient", opts);
        dispatch({ type: GET_ALL_DEMANDE_CLIENT_SUCCESS, payload: response.data });
        console.log(response.data)
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_DEMANDE_CLIENT_FAIL, payload: error });
    }
};
export const addDemande = (newdemande, navigate) => async(dispatch) => {
    try {
        const opts = {
            headers: { Authorization: ` ${localStorage.getItem("token")}` },
        };
        const response = await axios.post(
            "http://localhost:5000/demande/adddemande",
            newdemande, opts
        );
        console.log(response);
        dispatch({ type: ADD_DEMANDE_SUCCESS });
        dispatch(getAllDemandeClient());
        navigate("/productList");
    } catch (error) {
        console.dir(error);
        dispatch({ type: ADD_DEMANDE_FAIL, payload: error });
    }
};

export const getOneDemande = (iddemande) => async(dispatch) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/demande/one/${iddemande}`
        );
        dispatch({ type: GET_DEMANDE_SUCCESS, payload: response.data });
    } catch (err) {
        console.dir(err);
        dispatch({ type: GET_DEMANDE_FAIL, payload: err });
    }
};

export const deleteDemande = (iddemande) => async(dispatch) => {
    try {
        const opts = {
            headers: { Authorization: `${localStorage.getItem("token")}` },
        };
        const response = await axios.delete(
            `http://localhost:5000/demande/delete/${iddemande}`, opts
        );
        console.log(response.data)
        dispatch({ type: DELETE_DEMANDE_SUCCESS });
        dispatch(getAllDemande());

    } catch (error) {
        console.dir(error);
        dispatch({ type: DELETE_DEMANDE_FAIL, payload: error });
    }
};