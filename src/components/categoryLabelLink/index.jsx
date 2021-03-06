import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import CategoryLabel from "../categoryLabel";

const styles = {
  color: colors.linkPrimary,
  display: "block",
  textDecoration: "none",
};

const CategoryLabelLink = (props) => (
  <CategoryLabel style={props.style}>
    <a
      style={styles}
      data-qa={props.qaHook ? "category-label-link" : null}
      href={props.href}
      {...props}
    >
      {props.children}
    </a>
  </CategoryLabel>
);

CategoryLabelLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
  qaHook: PropTypes.bool,
};

CategoryLabelLink.defaultProps = {
  qaHook: false,
};

export default radium(CategoryLabelLink);
