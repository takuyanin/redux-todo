import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Button } from 'semantic-ui-react'

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
        <input
          placeholder="New Todo"
          ref={node => (input = node)}
        />
        <Button type='submit'>
          Add Todo
        </Button>
      </Form>
    </div>
  )
}

export default connect()(AddTodo)