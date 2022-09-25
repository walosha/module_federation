import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ".lds-roller": {
    display: "inline-block",
    position: "relative",
    width: "80px",
    height: "80px",
  },
  ".lds-roller div": {
    animation: "lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
    transformOrigin: "40px 40px",
  },
  ".lds-roller div:after": {
    content: '" "',
    display: "block",
    position: "absolute",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#fff",
    margin: "-4px 0 0 -4px",
  },
  ".lds-roller div:nth-child(1)": {
    animationDelay: "-0.036s",
  },
  ".lds-roller div:nth-child(1):after": {
    top: "63px",
    left: "63px",
  },
  ".lds-roller div:nth-child(2)": {
    animationDelay: "-0.072s",
  },
  ".lds-roller div:nth-child(2):after": {
    top: "68px",
    left: "56px",
  },
  ".lds-roller div:nth-child(3)": {
    animationDelay: "-0.108s",
  },
  ".lds-roller div:nth-child(3):after": {
    top: "71px",
    left: "48px",
  },
  ".lds-roller div:nth-child(4)": {
    animationDelay: "-0.144s",
  },
});

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes[".lds-roller"]}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
