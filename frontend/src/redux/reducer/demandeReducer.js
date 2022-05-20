import { ADD_DEMANDE_FAIL, DELETE_DEMANDE_FAIL, GET_ALL_DEMANDE_CLIENT_FAIL, GET_ALL_DEMANDE_CLIENT_SUCCESS, GET_ALL_DEMANDE_FAIL, GET_ALL_DEMANDE_SUCCESS, LOAD_DEMANDE } from "../actionsTypes/demandeactiontype";

const initialState = {
    loading: false,
    demandes: [],
    demandesC: [],
    errors: null,

};
export const demandeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_DEMANDE:
            return {...state, loading: true };
        case GET_ALL_DEMANDE_SUCCESS:
            return {...state, demandes: payload.allDemande, loading: false };
        case GET_ALL_DEMANDE_FAIL:
            return {...state, errors: payload, loading: false };
        case GET_ALL_DEMANDE_CLIENT_SUCCESS:
            return {...state, demandesC: payload.allDemandeC, loading: false };
        case GET_ALL_DEMANDE_CLIENT_FAIL:
            return {...state, errors: payload, loading: false };
        case DELETE_DEMANDE_FAIL:
            return {...state, errors: payload };
        case ADD_DEMANDE_FAIL:
            return {...state, errors: payload };


        default:
            return state;
    }
};
export default demandeReducer;