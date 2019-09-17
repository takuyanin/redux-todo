import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      listStyleType: 'none',
      borderBottom: '1px solid #ddd',
      width: '300px',
      lineHeight: '40px',
      textDecoration: completed ? 'line-through' : '',
      color: completed ? '#f34854' : '',
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo