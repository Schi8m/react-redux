import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'


function AddTask() {
    const[value, setValue] = React.useState('')

    const dispatch = useDispatch()

    function addTask(event){
        event.preventDefault()
        if (value.trim()){
            dispatch({type:"ADD_TASK", id: Date.now(), text: value, done:false})
        }
        setValue("")
    }
    
    return (
       <form className="addtask-form">
           <input className="addtask-input" value={value} onChange={event => setValue(event.target.value)} />
           <button className="addtask-button" onClick={(event) => addTask(event)}>+</button>
       </form>
    )
}

export default AddTask
