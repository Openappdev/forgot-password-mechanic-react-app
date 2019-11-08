import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/input.css";

class CustomInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { value, label, name, type, handleChange } = this.props;
    return (
      <div id="input" className="container">
        <label> {label} </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={event => handleChange(event)}
        />
      </div>
    );
  }
}

CustomInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func
};

// default props
CustomInput.defaultProps = {
  value: "Title",
  name: "custom_input",
  label: "Label",
  type: "input",
  handleChange: event => null
};

export default CustomInput;
