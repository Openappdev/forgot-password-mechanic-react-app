import React from "react";
import "../../assets/styles/notification.css";
import { colors } from "../../utils/variables";

class NotificationMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      type: null,
      message: null
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(null);
  }

  show(type, message) {
    this.setState({
      type,
      message,
      show: true
    });
  }

  hide() {
    this.setState({
      type: null,
      message: null,
      show: false
    });
  }

  render() {
    const { show, message, type } = this.state;
    return show ? (
      <div
        id="notification"
        className="notification"
        style={{
          backgroundColor: type === "success" ? colors.green : colors.red
        }}
      >
        <label>{message}</label>
      </div>
    ) : null;
  }
}

export default NotificationMessage;
