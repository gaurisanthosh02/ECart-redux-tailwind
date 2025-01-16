// import React from 'react'

import { Link } from "react-router"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProducts } from "../redux/slices/productSlice"



const Home = () => {

  const {allProducts, loading, errorMsg} = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch( fetchProducts())
  }, [dispatch] )


  return (
    <>
      <Header insideHome = {true}/>
      <div className="container px-4 mx-auto" style={{paddingTop:'100px'}}>
        {
          loading ? 
          <div className="flex justify-center items-center my-5 text-2xl">
            <img height={'70px'} width={'70px'} className="me-3" src="https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif" alt="" />
            Loading...
          </div> : 
          <>
            <div className="grid grid-cols-4 gap-4">
            {

              allProducts?.length >0 ?
                allProducts?.map( products => (

                  <div key={products?.id} className='rounded border-2 p-2 shadow'>
                      <img height={'200px'} width={'100%'} src={products?.thumbnail} alt="" />
                      <div className="text-center">
                        <h3 className="text-xl font-bold">${products?.title}</h3>
                        <Link to={`/${products?.id}/view`} className="bg-violet-600 rounded p-1 mt-3 text-white inline-block">View More...</Link>
                      </div>
                  </div>
                )) 
                :
                <div  className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                  Products Not Found!!!
                </div>
            }
            </div>
          </>
        }

      </div>
    </>
  )
}

export default Home