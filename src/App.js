import React from 'react'
import List from './components/List'
import AddTask from './components/AddTask'

function App () {
  return (
    <div className="App">
      <h1>Список задач</h1>
      <AddTask />
      <List />
    </div>
  )
}

export default App
