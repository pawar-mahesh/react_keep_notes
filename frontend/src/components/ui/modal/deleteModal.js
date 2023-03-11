import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

class ModalDelete extends React.Component {
  onClickCancelHandler = () => {
    this.props.onCloseClick();
  };

  onClickDeleteHandler = () => {
    this.props.onDeleteClick(this.props.id);
  };

  render() {
    return (
      <div className="modal show center" style={{ display: "block" }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Do you want to delete a note?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Header</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.header}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  defaultValue={this.props.message}
                  disabled
                />
              </Form.Group>
              <Button variant="danger" onClick={this.onClickDeleteHandler}>
                Delete
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

export default ModalDelete;
