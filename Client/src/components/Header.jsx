import React from 'react'
import Dash_logo from '../../src/assets/Dash_logo.png'

const Header = () => {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md  shadow-lg p-8 px-20 fixed w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Dash_logo} alt="Logo" className="h-12 w-auto mr-4 " />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header