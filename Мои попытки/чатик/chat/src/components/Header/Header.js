import React from "react";
import "./style.css";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };
  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div>
        <h1> ChatRoom {this.props.chatId}</h1>
      </div>
    );
  }
}
