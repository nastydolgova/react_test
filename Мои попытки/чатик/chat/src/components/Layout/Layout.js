import React from "react";
import Messages from "../MessagesField/MessagesField";
import ChatList from "../ChatList/ChatList";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import "./style.css";

//store
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };
  static defaultProps = {
    chatId: 1,
  };
  render() {

    return (
      <div>
        <Header chatId={this.props.chatId} />
        <div className="contain">
          <ChatList />
          <Messages />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});
  
export default connect(mapStateToProps)(Layout);

// Messages usr= { this.props.usr }
