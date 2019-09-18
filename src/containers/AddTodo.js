import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, FormControl, Button } from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='addTodo'>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <FormControl
          placeholder="New Todo"
          ref={node => (input = node)}
        />
        <Button variant="outline-secondary" type='submit'>
          Add Todo
        </Button>
      </Form>
    </div>
  )
}

export default connect()(AddTodo)