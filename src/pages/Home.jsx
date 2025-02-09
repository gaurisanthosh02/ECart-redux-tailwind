// import React from 'react'

import { Link } from "react-router"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProducts } from "../redux/slices/productSlice"



const Home = () => {

  const {allProducts, loading, errorMsg} = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  const dispatch = useDispatch()

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productsPerPage)
  const currentPageProductsLastIndex = currentPage * productsPerPage // 8,16
  const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage  // 8-8=0, 16-8=8
  const visibleAllProducts = allProducts?.slice(currentPageProductsFirstIndex,currentPageProductsLastIndex)

  useEffect(()=>{
    dispatch( fetchProducts())
  }, [dispatch] )

  const navigateToNextPage = () => {
    if(currentPage != totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage = () => {
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }

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
                visibleAllProducts?.map( products => (

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

      {/* pagination */}
      <div className="text-2xl text-center mt-20">
        <span className="cursor-pointer"><button onClick={navigateToPrevPage}><i className="fa-solid fa-arrow-left me-5"></i></button></span>
        <span>{currentPage} of {totalPages}</span>
        <span className="cursor-pointer"><button onClick={navigateToNextPage}><i className="fa-solid fa-arrow-right ms-5"></i></button></span>

      </div>
    </>
  )
}

export default Home