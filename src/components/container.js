import React from "react"
import containerStyles from "./container.module.css"
import Header from "./Header"
import Main from './Main'
import TeachersSection from './TeachersSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

export default ({ children }) => (
  <div className={containerStyles.Container}>
      <Header/>
      <Main/>
      <TeachersSection/>
      <ContactSection/>
      <Footer/>
  </div>
)