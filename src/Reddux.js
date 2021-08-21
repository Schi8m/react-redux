import React from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'

function Reddux() {

    const initialState = {
        id: 1,
        done: false,
        text: "ПОшла нахуй, обезьяна!"
    }
    
    function reducer(state = initialState, action) {
        switch(action.type){
            case 'CHANGE_TEXT':
                return {...state, text: action.payload}

            case 'CHANGE_DONE':
                return {...state, done: !state.done}
    }

    const store = createStore(reducer)

    const changeText= {
        type: 'CHANGE_TEXT',
        payload: 'Сам ты обезьяна, чиорт!'
    }   

    store.dispatch(changeText)


    return (
        <div>
            
        </div>
    )
}

export default Reddux
