// import React from 'react'

import { Link, useNavigate } from "react-router"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from "../redux/slices/cartSlice"

const Cart = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(()=>{
    if(userCart?.length >0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }
  },[userCart])

  const handleDecrement = (product) =>{
    if(product?.quantity >1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Order Confirmed...Thankyou")

    //redirecting to home
    navigate('/')
  }


  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className="px-5">
        {
          userCart?.length >0 ?
          <>
            <h1 className="text-5xl font-bold text-blue-600">Cart Summary</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-2 border rounded p-5 shadow">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-bold">#</td>
                      <td className="font-bold">Name</td>
                      <td className="font-bold">Image</td>
                      <td className="font-bold">Quantity</td>
                      <td className="font-bold">Price</td>
                      <td className="font-bold">...</td>
                    </tr>
                  </thead>
                  <tbody>
                    {

                      userCart?.map((product, index)=>(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{product?.title}</td>
                          <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                          <td>
                            <div className="flex">
                              <button onClick={()=>handleDecrement(product)} className="font-bold">-</button>
                                <input style={{width:'40px'}} className="border p-1 rounded mx-2" value={product?.quantity} type="text" readOnly/>
                              <button onClick={()=>dispatch(incrementQuantity(product?.id))} className="font-bold">+</button>
                            </div>
                          </td>
                          <td>{product?.totalPrice} </td>
                          <td><button onClick={()=>dispatch(removeCartItem(product.id))} className="text-red-600"><i className="fa-solid fa-trash"></i></button></td>
                        </tr>
                      ))

                    }
                  </tbody>
                </table>

                <div className="flex-right mt-5">
                  <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
                  <Link to={'/'} className="bg-blue-600 ms-3 rounded p-2 text-white">Shop More...</Link>
                </div>
              </div>

              <div className="col-span-1">
                <div className="border rounded p-5">
                  <h2 className="text-2xl font-bold my-4">Total Amount : <span className="text-red-600">$ {cartTotal}</span></h2>
                  <hr />
                  <button onClick={handleCheckout} className="bg-green-600 p-2 text-white w-full mt-4">Check Out</button>
                </div>
              </div>
            </div>
          </>

          :
          <div className="flex flex-col justify-center items-center">
            <img className="w-100 h-1/2" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png" alt="" />
            <h1 className="text-red-600 text-3xl">Your Cart is Empty !!!</h1>
          </div>
        }
        

      </div>
    </>
  )
}

export default Cart