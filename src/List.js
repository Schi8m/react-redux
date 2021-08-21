import React from 'react'
import Item from './Item'
import {useSelector} from 'react-redux'


function List() {
    let counter = 0;
    const state = useSelector(state => state)
    return (
        <ul className="list-ul">
           {
               state.map(task => {
                   counter++
                   return <Item 
                   task={task} 
                   key={task.id} 
                   />
               })
           }
        </ul>
    )
}

export default List
