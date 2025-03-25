import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between py-5 font-medium px-8">
    
    <div>
      <img src={assets.logo} style={{ width: "80px", height: "80px", borderRadius:"50%" }} alt="Logo" />
    </div>

    
    <div className="ml-auto">
      <ul className="flex list-none text-sm text-gray-700" style={{ gap: "32px" }}>
        <li>
          <NavLink
            to="/"
            className="text-gray-700 hover:text-gray-900"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collection"
            className="text-gray-700 hover:text-gray-900"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            COLLECTIONS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-gray-900"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            ABOUT
          </NavLink>
        </li>

        <li >
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-gray-900"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar