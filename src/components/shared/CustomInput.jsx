import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/input.css";

class CustomInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { value, label, name, handleChange } = this.props;
    return (
      <div id="input" className="container">
        <label> {label} </label>
        <input
          type="text"
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
  handleChange: PropTypes.func
};

// Set default props
CustomInput.defaultProps = {
  value: "Title",
  name: "custom_input",
  label: "Label",
  handleChange: event => null
};

export default CustomInput;
