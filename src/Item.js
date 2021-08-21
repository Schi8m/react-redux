import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'


function Item(props) {
    const dispatch = useDispatch()

    function completeTask(){
         dispatch({type:"COMPLETE_TASK", id: props.task.id})
    }

    function deleteTask(){
        dispatch({type: "REMOVE_TASK", id: props.task.id})
    }

    let styles=['item-li']
        if(props.task.done){
            styles.push('done')
        }
    return (
        <li className={styles.join(' ')}>
            <span className="item-span">
                <input style={{marginLeft:'1rem'}} type="checkbox" onChange={() => completeTask()}/>
                {props.task.text}
            </span>
            <button className="item-button" onClick={() => deleteTask()}>X</button>
        </li>
    )
}

Item.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Item
