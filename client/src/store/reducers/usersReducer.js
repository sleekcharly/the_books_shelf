import {
    USER_LOGIN
} from '../types';

export default function(state={}, action){
    switch(action.type){
        case USER_LOGIN:
            return {...state, auth: action.payload.auth, userData: action.payload.userData }
        default:
            return state;
    }
}