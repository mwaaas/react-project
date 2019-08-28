import ReactDom from "react-dom";
import React from 'react'
import Greeting from "./greeting";

ReactDom.render(
  <Greeting name="World"/>,
    document.body
);