import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-1 ml-5">
        <span className="text-red-500 text-2xl font-bold">U</span>
        <span className="text-blue-500 text-2xl font-bold">n</span>
        <span className="text-yellow-500 text-2xl font-bold">i</span>
        <span className="text-green-500 text-2xl font-bold">f</span>
        <span className="text-black text-2xl font-bold">y</span>
      </div>

      {/* Hamburger Icon (for mobile) */}
      <button
        className="md:hidden text-gray-600 hover:text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Menu Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Menu Items for Desktop */}
      <div className="hidden md:flex gap-8 space-x-6 text-gray-600">
        <button className="hover:text-black">Home</button>
        <button className="hover:text-black">Profile</button>
        <button className="hover:text-black">About Us</button>
        <button className="hover:text-black">Contact</button>
      </div>
      <div className='md:block hidden'></div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50">
          <button className="hover:text-black">Home</button>
          <button className="hover:text-black">Profile</button>
          <button className="hover:text-black">About Us</button>
          <button className="hover:text-black">Contact</button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
