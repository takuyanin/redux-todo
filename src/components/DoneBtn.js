import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

const DoneBtn = ({ onClick, completed }) => {
  const text = completed ? 'Undone' : 'Done'
  return (<div className='done'>
    <Button variant='dark'
      onClick={onClick}
      style={{
      backgroundColor: completed ? '#f34854' : '',
      borderColor: completed ? '#f34854' : '',
    }}>
      {text}
    </Button>
  </div>);
};

DoneBtn.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DoneBtn