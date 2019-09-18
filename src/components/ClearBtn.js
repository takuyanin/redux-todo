import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const ClearBtn = ({todos, completed, deleteTodos}) => {
  const condition = !completed || todos.length === 0
  return (
    <Button
      onClick={() => deleteTodos(todos)}
      disabled={condition}
      style={{
        backgroundColor: condition ? '' : 'red',
        color: condition ? '' : '#fff',
      }}
    >
      Clear All
    </Button>
  )
}

ClearBtn.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ),
  completed: PropTypes.bool.isRequired,
  deleteTodos: PropTypes.func.isRequired,
}

export default ClearBtn