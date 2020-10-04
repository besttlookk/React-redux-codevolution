/*
Redux: Redux is a "predictable" "state container" for "javascript apps"

Redux is not ties to React. It can be used with React, Angular, Vue or even vanilla JS. 

Redux is a library fo JS applications

Redux stores the state of our applications

In redux, all state transitions are explicit and it is possible to keep track of them. The changes to our applications's state become predicatabkle


*/

/* 
===============================React-Redux=====================================
It is the official redux UI binding library for React 

*/

/* 


//=======================Three core concepts========================

Store: store holds the state of our application

Action: action describe the change in the application.

Reducer: reducer which actually carries out state transaction depending on the action.

//======================three principle ===========================

First: "The state of our whole application is stored in an object tree within a single store"
    Maintain our application state in a single object which would be managed by the Redux store.

Second: "The only way to change the state is to emit an action, an object describing what happened"
        to update the store of our app, we need to let Redux know about that with an action. It is not allowed to directly update the state object.(not allowed to directly take the cake)

Third: "To specify how the state tree is transformed by actions, we write pure reducers"
        Reducer - (previousState, action) => newState

//=====================Actions====================================================
The only way our application can interact with the store is through actions.

actions carry some information fromour app to the redux store.

action is a Js objects.

actions have a 'type' property that indicates the type oj action being perfomed.

the 'type' property is typically defined as string constants.

*/
// ===============================================================================================
// const redux = require('redux')

// first define a string constant that indicated the "type" of the action
// const BUY_CAKE = "BUY_CAKE"

// now define action(object which has type property)
// {
//         type: BUY_CAKE,
//         info: "First redux action"

// }

// but with redux we also create "action creater(function that returns a action)"

// function buyCake(){
//         return {
//                 type: BUY_CAKE,
//                 info: "First redux action"
        
//         }
// }


// ===============Reducers[~shopkeeper]==============================
// It specifes how the app's state changes in response to action sent to the store
// It is a function that accepts state and action as arguments, and returns the next state of the application
// (prevState, action) => newState

// const initialState = {
//         numOfCake: 10
// }

// const reducer = (state = initialState, action) => {
//         switch(action.type){
//                 case BUY_CAKE: return {
//                         ...state,
//                         numOfCake: state.numOfCake - 1
//                 }

//                 default: return state 
//         }

// }


// =================================Redux Store ========================
// One store for the entire application.
// Responsibilities: 
//              1. Holds applications state
//              2. Allows access to state vis getState()
//              3. Allows state to be updated via dispatch(action)
//              4. Register listners via subscribe(listener)
//              5. handler unregistered of listeners via the function returned by subscribe(listner)

// const createStore = redux.createStore

// const store = createStore(reducer)
// console.log('Initial State', store.getState())  //responsibility 2

// const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState())) // responsibility 4

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())

// unsubscribe()

// ======================================================================================================
// ========================one reducer[shopkeepers] for multiple actions [Not good for scale point of view]

// const BUY_CAKE = "BUY_CAKE"
// const BUY_ICECREAM = "BUY_ICECREAM"

// const initialState = {
//         numOfCake: 10,
//         numOfIceCream: 20
// }

// function buyCake(){
//         return {
//                 type: BUY_CAKE,
//                 info: "First redux action"
        
//         }
// }

// function buyIceCream(){
//         return {
//                 type: BUY_ICECREAM,
//                 info: "Second redux action"
        
//         }
// }

// const reducer = (state = initialState, action) => {
//         switch(action.type){
//                 case BUY_CAKE: return {
//                         ...state,
//                         numOfCake: state.numOfCake - 1
//                 }
//                 case BUY_ICECREAM: return {
//                         ...state,
//                         numOfIceCream: state.numOfIceCream - 1
//                 }

//                 default: return state 
//         }

// }

// const createStore = redux.createStore

// const store = createStore(reducer)
// console.log('Initial State', store.getState()) 

// const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

// unsubscribe()


// =============================Multiple reducers ==========================================

// const BUY_CAKE = "BUY_CAKE"
// const BUY_ICECREAM = "BUY_ICECREAM"

// const initialCakeState = {
//         numOfCake: 10,
        
// }

// const initialIceCreamState = {
//         numOfIceCream: 20
        
// }

// function buyCake(){
//         return {
//                 type: BUY_CAKE,
//                 info: "First redux action"
        
//         }
// }

// function buyIceCream(){
//         return {
//                 type: BUY_ICECREAM,
//                 info: "Second redux action"
        
//         }
// }

// const cakeReducer = (state = initialCakeState, action) => {
//         switch(action.type){
//                 case BUY_CAKE: return {
//                         ...state,
//                         numOfCake: state.numOfCake - 1
//                 }
//                 default: return state 
//         }

// }
// const iceCreamReducer = (state = initialIceCreamState, action) => {
//         switch(action.type){
              
//                 case BUY_ICECREAM: return {
//                         ...state,
//                         numOfIceCream: state.numOfIceCream - 1
//                 }

//                 default: return state 
//         }

// }

// const createStore = redux.createStore
// const combineReducers = redux.combineReducers

// const rootReducer = combineReducers({
//         cake: cakeReducer,  // state.cake.numOfCake
//         iceCream : iceCreamReducer  // state.iceCream.numOfIceCresm
// })

// const store = createStore(rootReducer)
// console.log('Initial State', store.getState()) 

// const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

// unsubscribe()


// =====================================middleware =================================
// It is the suggested way to extend way to extend redux with custom functionality
// It provieds a third a third party extention point between dispatching an action , and the moment it reaches the reduces

// use middlewwaerw for logging, cash reporting, performiong asynchronou tasks etc

// const redux = require('redux')
// const reduxLogger = require('redux-logger')  // added

// const createStore = redux.createStore 
// const combineReducers = redux.combineReducers
// const applyMiddleware = redux.applyMiddleware   // added
// const logger = reduxLogger.createLogger()      // added
 
// const BUY_CAKE = "BUY_CAKE"
// const BUY_ICECREAM = "BUY_ICECREAM"

// const initialCakeState = {
//         numOfCake: 10,
        
// }

// const initialIceCreamState = {
//         numOfIceCream: 20
        
// }

// function buyCake(){
//         return {
//                 type: BUY_CAKE,
//                 info: "First redux action"
        
//         }
// }

// function buyIceCream(){
//         return {
//                 type: BUY_ICECREAM,
//                 info: "Second redux action"
        
//         }
// }

// const cakeReducer = (state = initialCakeState, action) => {
//         switch(action.type){
//                 case BUY_CAKE: return {
//                         ...state,
//                         numOfCake: state.numOfCake - 1
//                 }
//                 default: return state 
//         }

// }
// const iceCreamReducer = (state = initialIceCreamState, action) => {
//         switch(action.type){
              
//                 case BUY_ICECREAM: return {
//                         ...state,
//                         numOfIceCream: state.numOfIceCream - 1
//                 }

//                 default: return state 
//         }

// }



// const rootReducer = combineReducers({
//         cake: cakeReducer,  
//         iceCream : iceCreamReducer 
// })

// const store = createStore(rootReducer, applyMiddleware(logger))  // updated
// console.log('Initial State', store.getState()) 

// const unsubscribe = store.subscribe(() => {})

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

// unsubscribe()


