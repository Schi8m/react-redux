import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = [
  {id:1, done: false, text: "Это первая и тестовая задача. Удали ее и начинай пользоваться приложением."}
]

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case "ADD_TASK":
      return ([...state,{id: action.id, done: action.done, text: action.text}])
    case "REMOVE_TASK":
      return [...state].filter(task => (task.id !== action.id))
    case "COMPLETE_TASK":
      return [...state].map(task => {
        if (task.id === action.id){task.done = !task.done}
        return task
      })
    default: 
     return state
      }

}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

