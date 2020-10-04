import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes'

import axios from 'axios'

const fetchUsersRequest =()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess =(users)=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
        }
    }
const fetchUsersFailure =(error)=>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest)  // this will turn loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.messgae))
            })
    }
}