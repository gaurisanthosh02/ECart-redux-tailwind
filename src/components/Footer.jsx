import { Link } from "react-router"

// import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-violet-600 h-96 flex items-center justify-center"> 

          <div className="container mx-auto flex justify-between">

            <div className="flex-col">
              <h2 className="text-xl font-bold">E cart</h2>
              <p className="w-60 mt-2">Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
              </p>
              <p>Code licensed MIT, docs CC BY 3.0.</p>
              <p>Currently v5.3.3.</p>
            </div>
  
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Links</h2>
              <Link to={'/'}>Home Page</Link>
              <Link to={'/wishlist'}>Wishlist Page</Link>
              <Link to={'/cart'}>Cart Page</Link>
            </div>
  
            <div>
              <h3 className="text-xl font-bold">Guides</h3>
              <ul className="mt-2">
                <li>Getting Started</li>
                <li>Starter template</li>
                <li>Webpack</li>
                <li>Parcel</li>
                <li>Vite</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-bold">Projects</h3>
              <ul className="mt-2">
                <li>Bootstrap 5</li>
                <li>Bootstrap 4</li>
                <li>Icons</li>
                <li>RFS</li>
                <li>Examples repo</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-bold">Community</h3>
              <ul className="mt-2">
                <li>Issues</li>
                <li>Discussions</li>
                <li>Corporate Sponsors</li>
                <li>Open Collective</li>
                <li>Stack Overflow</li>
              </ul>
            </div>
          </div>

        </footer>
    
    </>
  )
}

export default Footer