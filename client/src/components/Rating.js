import React from "react"
import PropTypes from "prop-types"

const ARR = [1, 2, 3, 4, 5]

const Rating = ({ rating, numReviews }) => {
  const rate = ARR.map((no) =>
    rating >= no ? (
      <i key={no} className="pr-1 fa fa-star text-brown"></i>
    ) : rating === no - 0.5 ? (
      <i key={no} className="pr-1 fa fa-star-half-o text-brown"></i>
    ) : (
      <i key={no} className="fa fa-star-o"></i>
    )
  )
  return (
    <>
      {rate} <br />
      <small className="font-weight-bold text-gray">( {numReviews} )</small>
    </>
  )
}

export default Rating

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.string.isRequired,
}
