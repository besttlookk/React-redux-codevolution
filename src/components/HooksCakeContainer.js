import React from 'react'
import { useSelector, useDispatch } from "react-redux"  // it do the work of mapStateToProps
import { buyCake } from '../redux'

function HooksCakeContainer() {

    // It accepts fnction as the parameter
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of cakes - { numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())} > Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
