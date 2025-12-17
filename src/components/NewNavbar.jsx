import React, { useState } from 'react';

function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#00000033] backdrop-blur-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-[910px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="https://atelier-product.vercel.app/" className="flex items-center">
          <img
            src="https://atelier-product.vercel.app/assets/ATS%20White%20lOGO%20PNG.png"
            alt="Atelier"
            className="h-14 md:h-20"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-semibold text-white">
          <a href="#features">Features</a>
          <a href="#products">Products</a>
          <a href="#benefits">Benefits</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#our-values">Our Value</a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <a
            href="/contact.html"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
          >
            Start for free
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between h-5 w-6 focus:outline-none"
          >
            <span className="block h-[2px] w-full bg-white"></span>
            <span className="block h-[2px] w-full bg-white"></span>
            <span className="block h-[2px] w-full bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#ffffff33] backdrop-blur-md rounded-lg p-4 flex flex-col gap-3 text-white font-semibold">
          <a href="#features">Features</a>
          <a href="#products">Products</a>
          <a href="#benefits">Benefits</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#our-values">Our Value</a>
          <a
            href="/contact.html"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold mt-2 text-center"
          >
            Start for free
          </a>
        </div>
      )}
    </div>
  );
}

export default NewNavbar;
