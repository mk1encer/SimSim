import React, { Component } from "react";
import Logout from "./Logout";
import { db, auth } from "../Firebase";
import { ref, push, update, child, onChildAdded } from "firebase/database";
import { FaApple } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ChatRoom from "./ChatRoom";

export default class AddRoom extends Component {
  state = {
    show: false,
    name: "",
    chatRoomsRef: ref(db, "/chatRooms"),
    chatRooms: [],
    selectedRoom: null,
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

  renderChattings = (chatRoom) => {
    console.log(`chattings in ${chatRoom}`);
    this.setState({ selectedRoom: chatRoom });
  };

  renderChatRooms = (chatRooms) =>
    chatRooms.length > 0 &&
    chatRooms.map((room) => (
      <li 
        style={{ textAlign: "left",cursor:"pointer" }}
        key={room.id}
        onClick={() => {
          this.renderChattings(room.name);
        }}
      >
        &nbsp;&nbsp;&nbsp;{">"} {room.name}
      </li>
    ));

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

    return (
      <div>
        <br />
        <Logout />
        <br />
        <div style={{ margin: "1rem", display: "flex" }}>
          <div
            style={{
              width: "10rem",
              height: "25rem",
              backgroundColor: "#ffadc1",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              &nbsp;&nbsp;<br/><br/>
              <FaApple style={{ marginRight: 3, fontSize: 13 }} />
              채팅방 목록 ({this.state.chatRooms.length})&nbsp;
              <FaPlus style={{ cursor: "pointer" }} onClick={this.handleShow} />
            </div>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create a chat room</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control style={{textAlign:"left"}}
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
                <Button style={{backgroundColor: "#ffadc1", border:"none"}} variant="primary" onClick={this.handleSubmit}>
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
            <ul style={{ listStyleType: "none", float: "left", padding: 0 }}>
              {this.renderChatRooms(this.state.chatRooms)}
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "white",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              border:"10px solid #ffadc1",
            }}
          >
            {this.state.selectedRoom === null ? (
              <div>채팅방을 선택하세요</div>
            ) : (
              <ChatRoom name={this.state.selectedRoom} />
            )}
            {/* roomname이 선택되면 그에 따른 채팅방을 렌더링해야함 */}
          </div>
        </div>
      </div>
    );
  }
}
