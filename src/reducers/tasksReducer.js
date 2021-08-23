import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from '../actions/tasksActions'

const INITIAL_STATE = [
  { id: 1, done: false, text: 'Это первая и тестовая задача. Удали ее и начинай пользоваться приложением.' }
]
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return ([...state, { id: action.id, done: action.done, text: action.text }])
    case REMOVE_TASK:
      return [...state].filter(task => (task.id !== action.id))
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === action.id) { task.done = !task.done }
        return task
      })
    default:
      return state
  }
}
