import React from 'react'
import FilterLink from '../containers/FilterLink'
import ClearTodos from '../containers/ClearTodos'
import { VisibilityFilters } from '../actions'

const ShowSelect = () => (
  <div className='showSelect'>
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
    <ClearTodos filter={VisibilityFilters.SHOW_COMPLETED}/>
  </div>
)

export default ShowSelect