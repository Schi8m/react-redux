import React from 'react'
import List from './List'
import AddTask from './AddTask'
import { createStore } from 'redux'


function App() {

  return (
    <div className="App">
      <h1>Список задач</h1>
      <AddTask />
      <List />
    </div>
  );
}

export default App;
