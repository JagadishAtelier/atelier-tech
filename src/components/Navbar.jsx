import { ChevronDown, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full">
      <div className="flex items-center justify-between pe-4
          backdrop-filter-none bg-[#ffffff4d] border border-[#0000001a]
          rounded-[16px] w-full max-w-[910px] mx-auto shadow-[inset_0_4px_4px_#ffffff40] p-4">
        {/* Logo */}
        <img
          src="https://atelier-sdu1.vercel.app/assets/blue_logo-BZsKBbFk.svg"
          className="h-20"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-white">
          <a href="inventory" className="flex gap-1 items-center font-semibold">
            <p>Inventory</p>
            <ChevronDown />
          </a>
          <a href="/overview" className="font-semibold">
            <p>Overview</p>
          </a>
          <a href="features" className="font-semibold">
            <p>Features</p>
          </a>
          <a href="hardware" className="font-semibold">
            <p>Hardware</p>
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center text-white">
          <a href="/sign-in" className="font-semibold">
            Sign in
          </a>
          <Button variant={null} className="bg-[#005bd4] text-white">
            Try it free
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ffffff4d] border border-[#0000001a] rounded-[16px] mx-auto mt-2 max-w-[910px] p-4 shadow-[inset_0_4px_4px_#ffffff40] flex flex-col gap-4 text-white">
          <a href="inventory" className="flex gap-1 items-center font-semibold">
            Inventory <ChevronDown />
          </a>
          <a href="/overview" className="font-semibold">
            Overview
          </a>
          <a href="features" className="font-semibold">
            Features
          </a>
          <a href="hardware" className="font-semibold">
            Hardware
          </a>
          <div className="flex flex-col gap-2 mt-2">
            <a href="/sign-in" className="font-semibold">
              Sign in
            </a>
            <Button variant={null} className="bg-[#005bd4] text-white w-full">
              Try it free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
