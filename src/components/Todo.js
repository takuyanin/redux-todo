import React from 'react'
import PropTypes from 'prop-types'

import DoneBtn from './DoneBtn';

const Todo = ({ onClick, completed, text }) => (
  <li
    className='todo'
    style={{
      textDecoration: completed ? 'line-through' : '',
      color: completed ? '#f34854' : '',
    }}
  >
    {text}
    <DoneBtn onClick={onClick} completed={completed} />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo