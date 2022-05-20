import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { productReducer } from './productReducer'
import {demandeReducer} from './demandeReducer'
export const rootReducer = combineReducers({ userReducer,productReducer,demandeReducer})