import React, { useState, useEffect } from "react"
import Carosel from "../components/Carosel"
import Products from "../components/Products"
import InputText from "../components/InputText"
import { useSelector, useDispatch } from "react-redux"
import { listProducts } from "../action/productActions"

const Landing = () => {
  const { loading, products } = useSelector(({ productList }) => productList)
  const dispatch = useDispatch()

  const [input, setInput] = useState("")

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  // Scroll
  const [myRef, setMyRef] = useState({ current: null })

  const scroll = (ref) => {
    setMyRef({ ...myRef, ref })
    myRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <Carosel scroll={(myRef) => scroll(myRef)} />
      <div className="container-fluid">
        <div className="row bg-milk ">
          <div className="col-sm-12 pt-5 text-center font-weight-bolder">
            <h1>POPULAR PRODUCTS</h1>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p ref={myRef}></p>
          </div>
          <div className="col-sm-8 offset-sm-2 bg-milk mb-2">
            <InputText
              label=""
              value={input}
              placeholder="Search for product..."
              className="form-control text-center bg-gray"
              onChange={({ target }) => setInput(target.value)}
            />
          </div>
        </div>

        <div className="row mb-5 my-4">
          <Products loading={loading} products={products} />
        </div>
      </div>
    </div>
  )
}

export default Landing
