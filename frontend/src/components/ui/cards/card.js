import Card from "react-bootstrap/Card";
import React from "react";
import "./card.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalInput from "../modal/modal";
import ModalDelete from "../modal/deleteModal";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, showModal: false, showDeleteModal: false };
  }

  onHover = () => {
    this.setState({ hover: true });
  };

  onLeave = () => {
    this.setState({ hover: false });
  };

  onClickDeleteHandler = () => {
    this.setState({ showDeleteModal: true });
  };

  onClickDeleteModalHander = (id) => {
    fetch("http://192.168.1.10:3001/deleteNote", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  onClickEditHandler = (id) => {
    this.setState({ showModal: true });
  };

  onClickCancleModal = () => {
    this.setState({ showModal: false });
  };

  onClickCancleModalDeleteHandler = () => {
    this.setState({ showDeleteModal: false });
  };

  onClickUpdateModal = (id, header, message) => {
    fetch("http://192.168.1.10:3001/editNote", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        header: header,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <span>
        <Card
          border="warning"
          style={{ width: "18rem" }}
          className="cards"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Body>
            <Card.Text>{this.props.message}</Card.Text>
          </Card.Body>
          {this.state.hover ? (
            <div>
              <EditIcon
                className="btns"
                onClick={() => {
                  this.onClickEditHandler(this.props.id);
                }}
              />
              <DeleteForeverIcon
                className="btns"
                onClick={() => {
                  this.onClickDeleteHandler(this.props.id);
                }}
              />
            </div>
          ) : null}
        </Card>
        {this.state.showModal ? (
          <ModalInput
            id={this.props.id}
            header={this.props.header}
            message={this.props.message}
            onCloseClick={this.onClickCancleModal}
            onUpdateClick={this.onClickUpdateModal}
          />
        ) : null}
        {this.state.showDeleteModal ? (
          <ModalDelete
            id={this.props.id}
            header={this.props.header}
            message={this.props.message}
            onCloseClick={this.onClickCancleModalDeleteHandler}
            onDeleteClick={this.onClickDeleteModalHander}
          />
        ) : null}
      </span>
    );
  }
}

export default Cards;
