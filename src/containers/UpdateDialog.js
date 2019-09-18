import React from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Modal, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateTodo } from '../actions';

class UpdateDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      value: this.props.text
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dispatchUpdateAction = this.dispatchUpdateAction.bind(this)
  }

  handleOpen () {
    this.setState({ modalOpen: true })
  }

  handleClose () {
    this.setState({ modalOpen: false })
  }

  handleChange (e) {
    this.setState({ value: e.target.value})
  }

  dispatchUpdateAction (e) {
    e.preventDefault()
    this.props.dispatch(updateTodo(this.props.id, this.state.value))
    this.handleClose()
  }

  render() {
    return (
      <Modal
        trigger={<Button color="blue" onClick={this.handleOpen}>Update</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Header icon="tasks" content="Update Todo"/>
        <Modal.Content>
          <Input fluid value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green"
            onClick={e => this.dispatchUpdateAction(e)}>
            <Icon name="checkmark" /> Update
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

UpdateDialog.propTypes = {
  text: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(UpdateDialog)