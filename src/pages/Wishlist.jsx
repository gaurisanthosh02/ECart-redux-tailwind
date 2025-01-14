// import React from 'react'

import Header from "../components/Header"

const Wishlist = () => {
  return (
    <>
      <Header/>

      <div style={{paddingTop:'100px'}} className='px-5'>
        <>
          <h1 className='text-red-600 text-4xl font-bold'>My Wishlist</h1>
          <div className="grid grid-cols-4 gap-4">
            <div className='rounded border-2 p-2 shadow'>

                <img height={'200px'} width={'100%'} src="https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg" alt="" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Title</h3>
                  <div className='flex- justify-evenly mt-3'>
                    <button><i className="fa-solid fa-heart text-red-600"></i></button>
                    <button className='text-xl'><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
                  </div>
                </div>

            </div>

          </div>
        </>

      </div>
    </>
  )
}

export default Wishlist