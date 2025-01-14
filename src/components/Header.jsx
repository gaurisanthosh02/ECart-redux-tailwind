import { Link } from "react-router"

// import React from 'react'


const Header = ({insideHome}) => {
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
      <Link to={'/'} ><i className="fa-solid fa-cart-shopping"></i> Daily Cart
      </Link>

      <ul className="flex-1 text-right">
        {
          insideHome &&
          <li className="list-none inline-block px-5"><input type="text" className="rounded p-2" placeholder="Search for Products"/></li>
        }
        <li className="list-none inline-block px-5"><i className="fa-solid fa-heart text-red-600"></i>Wishlist <span className="bg-black text-white">20</span></li>
        <li className="list-none inline-block px-5"><i className="fa-solid fa-cart-shopping text-green-600"></i>Cart<span className="bg-black text-white">10</span></li>
      </ul>

    </nav>
  )
}

export default Header