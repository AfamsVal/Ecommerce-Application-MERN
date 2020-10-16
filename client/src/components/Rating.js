import React from "react"
const ARR = [1, 2, 3, 4, 5]

const Rating = ({ rating }) => {
  const rate = ARR.map((no) =>
    rating >= no ? (
      <i key={no} className="pr-1 fa fa-star text-brown"></i>
    ) : rating === no - 0.5 ? (
      <i key={no} className="pr-1 fa fa-star-half-o text-brown"></i>
    ) : (
      <i key={no} className="fa fa-star-o"></i>
    )
  )
  return <div className="mt-1 bg-gray">{rate}</div>
}

export default Rating
