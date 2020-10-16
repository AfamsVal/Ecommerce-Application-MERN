import React, { useState, useEffect } from "react"
import Carosel from "../components/Carosel"
import Products from "../components/Products"
import { PRODUCTS } from "../products"

const Landing = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(PRODUCTS)
  }, [products])
  return (
    <div>
      <Carosel />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 bg-milk py-5 text-center font-weight-bolder">
            <h1>POPULAR PRODUCTS</h1>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>
        <div className="row mb-5 my-4">
          <Products products={products} />
        </div>
      </div>
    </div>
  )
}

export default Landing
