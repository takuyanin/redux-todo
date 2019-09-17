import React from 'react'
import ShowSelect from './ShowSelect'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <ShowSelect />
    <VisibleTodoList />
  </div>
)

export default App