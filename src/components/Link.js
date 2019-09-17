import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Link = ({ active, children, onClick }) => (
  <Button
    variant='outline-success'
    onClick={onClick}
    style={{
      backgroundColor: active ? '#28a745' : '',
      color: active ? '#fff' : '',
      marginLeft: '4px'
    }}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link