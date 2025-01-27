import React from "react";

import styles from "./Divider.module.scss";

const Divider = ({ space = 22, bgColor = "#ccc", ...restProps }) => {
  const style = { marginTop: space, marginBottom: space, background: bgColor };

  return <div className={styles.line} style={style} {...restProps} />;
};

export default Divider;
