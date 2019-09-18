import React from 'react'
import { toggleTodo, deleteTodo, updateTodo } from '../actions'
import { connect } from 'react-redux'
import DoneBtn from '../components/DoneBtn'

import DeleteDialog from '../components/DeleteDialog'
import UpdateDialog from './UpdateDialog';

const HandleTodo = ({ completed, todo, toggleTodo, updateTodo, deleteTodo }) => {
  return (
    <div className='handleTodo'>
      <DoneBtn completed={completed} onClick={() => toggleTodo(todo.id)} />
      <UpdateDialog {...todo} />
      <DeleteDialog {...todo} onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}

const getTodo = (todos, ownTodo) => {
  return todos.find(t => t.id === ownTodo.id)
}

const mapStateToProps = (state, ownProps) => ({
  todo: getTodo(state.todos, ownProps)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleTodo)