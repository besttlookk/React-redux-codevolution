import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number Of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes   // need change
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () =>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) // connect func connects the react component to react store

// ============================React Redux + Hooks ================================================
/*
React redux pattern'

action creator, reducres , provider the store and connect the componet

com


*/

