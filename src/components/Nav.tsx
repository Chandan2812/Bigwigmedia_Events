import React from 'react'

function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
    {/* Logo Section */}
    <div className="flex items-center space-x-1">
      <span className="text-red-500 text-2xl font-bold">M</span>
      <span className="text-blue-500 text-2xl font-bold">e</span>
      <span className="text-yellow-500 text-2xl font-bold">r</span>
      <span className="text-green-500 text-2xl font-bold">i</span>
      <span className="text-black text-2xl font-bold">tto</span>
    </div>

    {/* Menu Items */}
    <div className="flex space-x-6 text-gray-600">
      <button className="hover:text-black">Home</button>
      <button className="hover:text-black">Profile</button>
      <button className="hover:text-black">About Us</button>
      <button className="hover:text-black">Contact</button>
    </div>
  </nav>

   )
}

export default Nav