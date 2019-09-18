import React from 'react'
import { toggleTodo, deleteTodo, updateTodo } from '../actions'
import { connect } from 'react-redux'
import DoneBtn from '../components/DoneBtn'
// import UpdateBtn from '../components/UpdateBtn'
import DeleteBtn from '../components/DeleteBtn'

const HandleTodo = ({ completed, todo, toggleTodo, updateTodo, deleteTodo }) => {
  return (
    <div>
      <DoneBtn completed={completed} onClick={() => toggleTodo(todo.id)} />
      {/* <UpdateBtn onClick={() => updateTodo(todo.id, todo.text)} /> */}
      <DeleteBtn onClick={() => deleteTodo(todo.id)} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  todo: state.todos.find(t => t.id === ownProps.id)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  deleteTodo: id => dispatch(deleteTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleTodo)