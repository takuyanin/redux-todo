import React from 'react'
import HeadBar from './HeadBar'
import AddTodo from '../containers/AddTodo'
import ShowSelect from './ShowSelect'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='app'>
    <HeadBar />
    <AddTodo />
    <ShowSelect />
    <VisibleTodoList />
  </div>
)

export default App