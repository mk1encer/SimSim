import React, { Component } from "react";
import Logout from "./Logout";
import { db, auth } from "../Firebase";
import { ref, push, update, child, onChildAdded } from "firebase/database";
import { FaApple } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddRoom extends Component {
  state = {
    show: false,
    name: "",
    chatRoomsRef: ref(db, "/chatRooms"),
    chatRooms: [],
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    if (this.isFormValid(name)) {
      this.addChatRoom();
    }
  };
  isFormValid = (name) => {
    return name;
  };

  componentDidMount() {
    this.AddChatRoomsListeners();
  }
  AddChatRoomsListeners = () => {
    let chatRoomsArray = [];
    onChildAdded(this.state.chatRoomsRef, (DataSnapshot) => {
      chatRoomsArray.push(DataSnapshot.val());
      this.setState({ chatRooms: chatRoomsArray });
    });
  };
  renderChatRooms = (chatRooms) =>
    chatRooms.length > 0 &&
    chatRooms.map((room) => <li key={room.id}>&nbsp;&nbsp;# {room.name}</li>);

  async addChatRoom() {
    const key = push(this.state.chatRoomsRef).key;
    const name = this.state.name;

    const newChatRoom = {
      id: key,
      name: name,
    };
    try {
      await update(child(this.state.chatRoomsRef, key), newChatRoom);
      this.setState({
        name: "",
        show: false,
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const userId = auth.currentUser.uid;

    return (
      <div>
        <Logout />
        <br></br>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          &nbsp;&nbsp;
          <FaApple style={{ marginRight: 3 }} />
          CHAT ROOMS (1)
          <FaPlus
            style={{ position: "absolute", left: 160, cursor: "pointer" }}
            onClick={this.handleShow}
          />
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a chat room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  placeholder="Enter a chat room name"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
        <ul style={{ float: "left", listStyleType: "none", padding: 0 }}>
          {this.renderChatRooms(this.state.chatRooms)}
        </ul>
      </div>
    );
  }
}
