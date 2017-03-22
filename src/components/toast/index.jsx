import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontWeightMedium, fontSizeUppercase } from "../../styles/typography";
import Icon from "../icon";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import iconFromString from "../../utils/icon";

const styles = {
  container: {
    default: {
      borderRadius: `${(5 / fontSizeUppercase)}em`,
      color: colors.bgPrimary,
      fontSize: `${fontSizeUppercase}px`,
      fontWeight: fontWeightMedium,
      lineHeight: (13 / fontSizeUppercase),
      paddingBottom: `${(10 / fontSizeUppercase)}em`,
      paddingTop: `${(10 / fontSizeUppercase)}em`,
      transition: `opacity ${timing.fast} ease-in-out,
        transform ${timing.fast} ease-in-out`,
      textAlign: "center",
    },

    invisibleBottom: {
      opacity: 0,
      transform: `translateY(${(36 / fontSizeUppercase)}em)`,
    },

    invisibleTop: {
      opacity: 0,
      transform: `translateY(${(-36 / fontSizeUppercase)}em)`,
    },

    visible: {
      opacity: 1,
      tranform: "translateY(0)",
    },
  },

  icon: {
    fontSize: `${(16 / fontSizeUppercase)}em`,
    marginRight: `${(20 / fontSizeUppercase)}em`,
    verticalAlign: "bottom",
  },
};

const Toast = ({ children, color, icon, direction, visible, style }) => (
  <div
    className="Toast"
    style={[
      styles.container.default,
      color && { backgroundColor: rgba(colors[color], 0.86) },
      visible && styles.container.visible,
      (!visible && direction === "bottom") && styles.container.invisibleBottom,
      (!visible && direction === "top") && styles.container.invisibleTop,
      style,
    ]}
  >
    {icon && iconFromString(icon, {
      style: styles.icon,
      ariaHidden: true,
    })}
    {children}
  </div>
);

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  icon: PropTypes.oneOf(Object.keys(Icon)),
  direction: PropTypes.oneOf(["top", "bottom"]),
  visible: PropTypes.bool,
  style: propTypes.style,
};

Toast.defaultProps = {
  color: "textPrimary",
  direction: "bottom",
  visible: false,
};

export default radium(Toast);