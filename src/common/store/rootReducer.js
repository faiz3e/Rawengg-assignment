import { combineReducers } from 'redux';
import { loginReducer } from '../../home/pages/login/reducer';
import {signupReducer} from '../../home/pages/signUp/reducer'

export const rootReducer = combineReducers({ loginReducer,signupReducer })
