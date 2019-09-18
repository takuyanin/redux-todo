import React from 'react';
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { deleteTodo } from '../actions'
import { Button } from 'react-bootstrap'

const UpdateBtn = ({ onClick }) => {
  return (
    <div className='updateTodo'>
      <Button variant='danger'
        onClick={onClick}
      >
        Update label?
      </Button>
    </div>
  )
}

UpdateBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}
// const mapStateToProps = state => ({
//   todos: state.todos.
// })

export default UpdateBtn
// export default connect()(DelteTodo)