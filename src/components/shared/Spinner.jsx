import React from "react";
import "../../assets/styles/spinner.css";
import { staticData } from "../../data/static";

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(null);
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return show ? (
      <div className="spinner">{staticData.spinner.label}</div>
    ) : null;
  }
}

export default Spinner;
