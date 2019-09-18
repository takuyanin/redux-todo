import React from 'react'
import PropTypes from 'prop-types'

import HandleTodo from '../containers/HandleTodo'
// import DoneBtn from './DoneBtn';

const Todo = props => (
  <li
    className='todo'
    style={{
      textDecoration: props.completed ? 'line-through' : '',
      color: props.completed ? '#f34854' : '',
    }}
  >
    {props.text}
    <HandleTodo {...props} />
    {/* <DoneBtn completed={completed} /> */}
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo