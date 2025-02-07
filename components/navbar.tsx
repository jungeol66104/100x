'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-neutral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-mont text-2xl font-bold text-foreground">
              100x
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              홈
            </Link>
            <Link href="/service" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              서비스 소개
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              회사 소개
            </Link>
            <Link 
              href="/contact"
              className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
            >
              시작하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-neutral/10"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-neutral/10"
            >
              홈
            </Link>
            <Link 
              href="/service" 
              className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-neutral/10"
            >
              서비스 소개
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-neutral/10"
            >
              회사 소개
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90"
            >
              시작하기
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
