import React from "react"
import HelpContent from "../components/HelpContent"
import HelpFeedback from "../components/HelpFeedback"

const Help = () => {
  return (
    <div className="container mt-6">
      <h1 className="text-center text-uppercase font-weight-bold mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-center w-75 m-auto text-dark font-size-3 ">
        Enjoy our wonderful and super amazing monthly Pricing
      </p>
      <HelpContent />
      <HelpFeedback />
    </div>
  )
}

export default Help