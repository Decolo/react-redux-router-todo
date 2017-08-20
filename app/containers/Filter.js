import React from 'react'
import { setVisibilityFilter } from '../actions/todoList'
import { connect } from 'react-redux'

class Filter extends React.Component{
  handleClick(event, filterStr) {
    let { onFilterClick } = this.props
    event.preventDefault()
    // dispatch收到通知，去执行reducer
    onFilterClick(filterStr)
  }
  render() {
    return(
      <ul className="filter">
        <li onClick={event => this.handleClick.bind(this, event).call(null, 'SHOW_ALL')}>show all</li>
        <li onClick={event => this.handleClick.bind(this, event).call(null, 'SHOW_COMPLETED')}>show completed</li>
        <li onClick={event => this.handleClick.bind(this, event).call(null, 'SHOW_ACTIVE')}>show active</li>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter
  }
}
function mapDispathToProps(dispatch) {
  return {
    onFilterClick: filterStr => {
      dispatch(setVisibilityFilter(filterStr))
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Filter)