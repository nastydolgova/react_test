import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

//action
import { addChat } from "../../store/actions/chats_actions";

// redux
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class ChatList extends React.Component {
  state = {
    input: "",
  };
  handleChange = (evt) => {
    this.setState({ input: evt.target.value })
  }
  handleKeyUp = (evt) => {
    if (evt.keyCode === 13){
      this.handleAdd()
    }
  }
  handleAdd = () => {
    if (this.state.input !== ''){
      this.props.addChat(this.state.input)
    }
  }

  render() {
    let { chats } = this.props
    let chatsArray = []
    Object.keys(chats).forEach(key => {
        chatsArray.push(<Link to={`/chat/${key}`}>
                         <li>{chats[key].title }</li>
                         </Link>)
    })
    return (
     <div className="chats">
     <ul>
        {chatsArray}
      </ul>
          <input type="text" onChange = { this.handleChange } value = { this.state.input } onKeyUp = { this.handleKeyUp }  placeholder="Введите имя"></input>
          <button onClick = { this.handleAdd }> Добавить навый чат </button>
    </div>
    );
  }
}

const mapStateToProps = ({ chatsReducer }) => ({
  chats: chatsReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
