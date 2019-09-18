import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import ClearBtn from '../components/ClearBtn'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos.filter(t => t.completed ),
  completed: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodos: todos => {
    for (let i in todos) {
      dispatch(deleteTodo(todos[i].id))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearBtn)