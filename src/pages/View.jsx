// import React from 'react'

import Header from "../components/Header"

const View = () => {
  return (
    <>
      <Header/>
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <img width={'350px'} height={'250px'} src="https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg" alt="" />
          <div>
            <h3 className="font-bold">P ID: id</h3>
            <h1 className="text-5xl font-bold">Title</h1>
            <h4 className="font-bold text-red-600 text-2xl">$ 250</h4>
            <h4>Brand :</h4>
            <h4>Category :</h4>
            <p>
              <span className="font-bold">Description</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam labore rem in iure sint doloremque voluptatum inventore assumenda quibusdam praesentium.
            </p>
            <div className="flex justify-between mt-5">
              <button className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
              <button className="bg-green-600 rounded text-white p-2">Add to Cart</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default View