/**
 * React renderer.
 */
// tslint:disable: linebreak-style
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";

// Import the styles here to process them with webpack
import '@public/style.css';
// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);
  ReactDOM.render(
    <App />,
    document.getElementById("app") as HTMLElement,
  );