import React, { useState, useEffect } from "react"
import Carosel from "../components/Carosel"
import Products from "../components/Products"
import InputText from "../components/InputText"
import axios from "axios"

const Landing = () => {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("/api/products", {
        params: {
          search: input,
        },
      })
      setProducts(data)
    }
    fetchProduct()
  }, [input])

  // scroll
  const [myRef, setMyRef] = useState({ current: null })

  const scroll = (ref) => {
    setMyRef({ ...myRef, ref })
    myRef.current.scrollIntoView({ behavior: "smooth" })
  }

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
          <Products products={products} />
        </div>
      </div>
    </div>
  )
}

export default Landing
