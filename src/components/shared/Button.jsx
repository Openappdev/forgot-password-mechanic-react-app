import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/button.css";
import { colors } from "../../utils/variables";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      label,
      textColor,
      backgoundColor,
      type,
      handleOnClick
    } = this.props;
    return (
      <div id="button" className="container">
        <button
          type={type}
          onClick={() => handleOnClick()}
          style={{ color: textColor, backgroundColor: backgoundColor }}
        >
          {label}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  textColor: PropTypes.string,
  backgoundColor: PropTypes.string,
  handleOnClick: PropTypes.func
};

// default props
Button.defaultProps = {
  type: "button",
  label: "Button",
  textColor: colors.black,
  backgoundColor: colors.gray,
  handleOnClick: () => null
};

export default Button;
