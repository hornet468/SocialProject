import React from "react";
import classes from "./Forms.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (showError ? classes.error : "")}
    >
      {props.children}
      <div>{showError && <span>{meta.error}</span>}</div>
    </div>
  );
};

// <input {...props} {...input} />
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};
export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};
