// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { removeItem } from "../redux/slices/wishlistSlice"

const Wishlist = () => {

  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()


  return (
    <>
      <Header/>

      <div style={{paddingTop:'100px'}} className='px-5'>
      {
        userWishlist?.length >0 ?
        <>
        <h1 className='text-red-600 text-4xl font-bold'>My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4">
          {
            userWishlist?.map(product => (
              <div key={product?.id} className='rounded border-2 p-2 shadow'>
                    <img height={'200px'} width={'100%'} src={product?.thumbnail} alt="" />
                    <div className="text-center">
                        <h3 className="text-xl font-bold">{product.title}</h3>
                        <div className='flex- justify-evenly mt-3'>
                          <button onClick={()=>dispatch(removeItem(product?.id))}><i className="fa-solid fa-heart text-red-600"></i></button>
                          <button className='text-xl'><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
                        </div>
                      </div>
              </div>
              ))
          }

        </div>
      </>
        :
        <div className="flex flex-col justify-center items-center">
          <img className="w-100 h-1/2" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png" alt="" />
          <h1 className="text-red-600 text-3xl">Your Wishlist is Empty !!!</h1>
        </div>
        }

      </div>
    </>
  )
}

export default Wishlist