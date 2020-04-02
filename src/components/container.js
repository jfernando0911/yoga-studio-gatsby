import React from "react"
import containerStyles from "./container.module.css"
import Header from "./header";
import Main from './main';

export default ({ children }) => (
  <div className={containerStyles.container}>
      <Header/>
      <Main/>
  </div>
)