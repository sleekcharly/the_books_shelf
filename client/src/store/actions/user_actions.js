import axios from 'axios';

import {
    USER_LOGIN,
    USER_AUTH
} from '../types';

//================USER ============= //
export function loginUser({email, password}){
    const request = axios.post('/api/users/login', {email, password})
        .then( response => response.data )

    return {
        type: USER_LOGIN,
        payload: request
    }
}

export function auth(){
    const request = axios.get('/api/users/auth')
        .then(response => response.data);

        return {
            type: USER_AUTH,
            payload: request
        }
}