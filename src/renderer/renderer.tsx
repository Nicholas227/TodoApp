/**
 * React renderer.
 */
// tslint:disable: linebreak-style
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";

// Import the styles here to process them with webpack
import '@public/style.css';
  ReactDOM.render(
    <App />,
    document.getElementById("app") as HTMLElement,
  );