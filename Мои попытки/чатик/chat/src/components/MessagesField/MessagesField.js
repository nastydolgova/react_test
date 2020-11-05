import React, { Component } from "react";
import Message from "../Message/Message";
import "./style.css";
// action
import { sendMessage } from "../../store/actions/messages_actions";
// redux
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      mass: "",
      user: "",
      show: false,
    };
  }

  sendMessage = (text, sender) => {
    const { messages } = this.props;
    const messageId = Object.keys(messages).length + 1;
    this.props.sendMessage(messageId, sender, text);
  };

  handleSendMessage = (message, sender) => {
    if (message.length > 0) {
      this.sendMessage(message, sender);
      this.setState({ mass: "" });
    } else {
      alert("Введите сообщение");
    }
  };

  handle = () => {
    this.setState({ show: !this.state.show })
  }

  handleChange = (evt) => {
    if (evt.keyCode !== 13) {
    this.setState({ mass: evt.target.value })
    } else {
      this.sendMessage (this.state.mass, this.state.user)
    evt.target.value = "";
    }
  };

  // handleChangeName = (evt) => {
  //   this.setState({ user: evt.target.value });
  // };

  componentDidUpdate() {
    // const { messages } = this.props;
    // if (Object.keys(messages).length % 2 === 1) {
    //   setTimeout(() => {
    //     this.sendMessage("We'll call you back", "Bot");
    //   }, 500);
    // }
  }

  render() {
    let usr = 'Me'
    let { messages } = this.props;
    const messageComponents = [];
    Object.keys(messages).forEach((key) => {
      messageComponents.push(
        <Message
          sender={messages[key].name}
          text={messages[key].text}
          key={key}
        />
      );
    });

    return (
      <div className="totalfield">
        {/* <p>Hello {this.state.user}!</p>
        <input
          type="text"
          onChange={this.handleChangeName}
          value={this.state.user}
          placeholder="Имя"
        ></input> */}

        <div className="messagefield">{messageComponents}</div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.mass}
          onKeyUp={ this.handleChange }
          placeholder="Введите сообщение"
        ></input>
        <button
          onClick={() =>
            this.handleSendMessage(this.state.mass, usr )
          }
        >
          Отправить
        </button>
        <button
          onClick={this.handle}>
          ОК
        </button>
        { this.state.show && <div>SHOWED</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ msgReducer }) => ({
  messages: msgReducer.messages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
