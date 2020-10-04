// =====================================Async Actions ===============================================
/* 
//  Sync actions
as soon as an action was dispatched, the stte was immidiately updated

// async actions
async api calls to fecthc data frim an end point and use that data in our applicvaton

// what we wanna do in our application: Fetch a list of users frm an API end point and stores it in the redux
state? 
actions? 
reducer?

// ---state 
state = {
        loading: true,
        data: [],
        error: ''
        
}

loading - display a loadig spinner in our compunter
data - list of users
error- diaplay error

// ---actions?
FETCH_USERS_REQUEST - fetch list of useers 
FETCH_USERS_SUCCESS - fetch successfully
FETCH_USERS_FAILURE - error fetching


// ---reducers
case: FETCH_USERS_REQUEST 
        loading: true
case: FETCH_USERS_SUCCESS
        loading: false 
        users: data(from api)
case:FETCH_USERS_FAILURE
        loading: false
        error: error(from API)

*/
const redux = require('redux')
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"

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

const reducer  = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true 
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }


    }
}
// async action creater[returns an action]
// but using thunk middleware it givis the ability to avtion creater to return a function rather than an action object
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())  // this will turn loading to true
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const users = res.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.messgae))
            })
    }
}

const store = createStore(reducer , applyMiddleware(thunkMiddleware))
store.subscribe(()=> console.log(store.getState()))

store.dispatch(fetchUsers())