import React from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'

class DeleteDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen () {
    this.setState({ modalOpen: true })
  }

  handleClose () {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <Modal
        trigger={<Button color="pink" onClick={this.handleOpen}>Delete</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size="small"
        className='delete-modal'
      >
        <Header icon="tasks" content="Delete Todo" />
        <Modal.Content>
          <p>「{this.props.text}」Is it okay to delete this todo?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic inverted onClick={this.handleClose}>
            <Icon name="remove" /> No
          </Button>
          <Button color="red" inverted onClick={this.props.onClick}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteDialog.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DeleteDialog