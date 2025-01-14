// import React from 'react'

import { Link } from "react-router"
import Header from "../components/Header"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchProducts } from "../redux/slices/productSlice"



const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [] )


  return (
    <>
      <Header insideHome = {true}/>
      <div className="container px-4 mx-auto" style={{paddingTop:'100px'}}>
        <div className="grid grid-cols-4 gap-4">
          <div className='rounded border-2 p-2 shadow'>

              <img height={'200px'} width={'100%'} src="https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg" alt="" />
              <div className="text-center">
                <h3 className="text-xl font-bold">Title</h3>
                <Link to={'/id/view'} className="bg-violet-600 rounded p-1 mt-3 text-white inline-block">View More...</Link>
              </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home