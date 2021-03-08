import React from "react"
import PropTypes from "prop-types"

const ARR = [1, 2, 3, 4, 5]

const Rating = ({ rating, numReviews }) => {
  const rate = ARR.map((no) =>
    rating >= no ? (
      <i key={no} className="fas fa-star text-brown pr-1"></i>
    ) : rating === no - 0.5 ? (
      <i key={no} className="fas fa-star-half-alt text-brown pr-1"></i>
    ) : (
      <i key={no} className="far fa-star text-brown pr-1"></i>
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
