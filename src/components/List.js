import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'

function List () {
  const tasks = useSelector(state => state.tasks)

  return (
        <ul className="list-ul">
           {
            tasks.map((task, index) => {
              return <Item
                    {...task}
                    index={index + 1}
                    key={task.id}
                   />
            })
           }
        </ul>
  )
}

export default List
