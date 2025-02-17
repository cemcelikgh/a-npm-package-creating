import React from 'react';
import styles from './styles.module.css';

export const Button = (props) => {
  return <button
    className={
      styles.btn
      + " " +
      styles[props.type]
    }
    {...props}
  >
    {props.text}
  </button>
}

export default Button;
