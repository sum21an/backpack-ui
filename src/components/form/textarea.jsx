import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import styles from "./styles";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

function TextArea(props) {
  const {
    id,
    label,
    name,
    size,
    theme,
    customStyles,
    qaHook,
  } = props;
  const style = [styles.base];

  style.push(styles.element.textarea.base);

  if (size) {
    style.push(styles.size[size]);
    style.push(styles.element.textarea.size[size]);
  }

  if (theme) {
    style.push(styles.theme[theme]);
    style.push(styles.element.textarea.theme[theme]);
  }

  if (customStyles) {
    style.push(customStyles);
  }

  return (
    <textarea
      name={name || id}
      aria-label={label}
      qa-hook={qaHook ? createQAHook(name, id, "textarea") : null}
      title={label}
      {...props}
      style={style}
    />
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,

  name: PropTypes.string,

  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  theme: PropTypes.oneOf([
    "base",
    "light",
    "dark",
    "float",
  ]),


  customStyles: propTypes.style,

  qaHook: PropTypes.bool,

};

TextArea.defaultProps = {
  id: "",

  label: "",

  name: "",

  placeholder: "",

  required: false,

  rows: 10,

  cols: 0,

  size: "medium",

  theme: "base",

  onChange: null,

  qaHook: false,
};

export default radium(TextArea);
