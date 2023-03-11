import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

class ModalInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header,
      message: this.props.message,
    };
  }

  onClickCancelHandler = () => {
    this.props.onCloseClick();
  };

  onClickUpdateHandler = () => {
    this.props.onUpdateClick(
      this.props.id,
      this.state.header,
      this.state.message
    );
  };

  onChangeHeaderHandler = (event) => {
    this.setState({ header: event.target.value });
  };

  onChangeMessageHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    const isUpdateDisable =
      this.state.header.trim().length <= 0 ||
      this.state.message.trim().length <= 0
        ? true
        : false;
    return (
      <div className="modal show center" style={{ display: "block" }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit note</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Header</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.header}
                  onChange={this.onChangeHeaderHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  defaultValue={this.props.message}
                  onChange={this.onChangeMessageHandler}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={this.onClickUpdateHandler}
                disabled={isUpdateDisable}
              >
                Update
              </Button>
              <Button variant="secondary" onClick={this.onClickCancelHandler}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default ModalInput;
