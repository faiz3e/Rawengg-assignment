import { combineReducers } from 'redux';
import { loginReducer } from '../../home/pages/login/reducer';

export const rootReducer = combineReducers({ loginReducer })
