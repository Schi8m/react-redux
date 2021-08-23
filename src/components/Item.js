import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { COMPLETE_TASK, REMOVE_TASK } from '../actions/tasksActions'

function Item (props) {
  const dispatch = useDispatch()

  function completeTask () {
    dispatch({ type: COMPLETE_TASK, id: props.id })
  }

  function deleteTask () {
    dispatch({ type: REMOVE_TASK, id: props.id })
  }

  const styles = ['item-li']
  if (props.done) {
    styles.push('done')
  }
  return (
        <li className={styles.join(' ')}>
            <input style={{ marginLeft: '1rem' }} type="checkbox" onChange={() => completeTask()}/>
            <span className="item-span">
                {props.index}. {props.text}
            </span>
            <button className="item-button" onClick={() => deleteTask()}>X</button>
        </li>
  )
}

Item.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool,
  index: PropTypes.number

}

export default Item
