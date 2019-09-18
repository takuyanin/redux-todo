import React from 'react';
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { deleteTodo } from '../actions'
import { Button } from 'react-bootstrap'

const DeleteBtn = ({ onClick }) => {
  return (
    <div className='deleteTodo'>
      <Button variant='danger'
        onClick={onClick}
      >
        Delete label?
      </Button>
    </div>
  )
}

DeleteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}
// const mapStateToProps = state => ({
//   todos: state.todos.
// })

export default DeleteBtn
// export default connect()(DelteTodo)