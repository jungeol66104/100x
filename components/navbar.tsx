'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) within first 100px of scroll
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-200"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${scrollProgress})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[54px] md:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/svg/logo.svg"
              alt="Logo"
              width={100}
              height={30}
              className="w-auto h-6 md:h-8 transition-all duration-200"
              style={{
                filter: `invert(${1 - scrollProgress})`,
                opacity: 1
              }}
            />
          </Link>

          {/* CTA Button */}
          <Link 
            href="https://tally.so/r/w7aGb6"
            className="px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-200"
            style={{
              backgroundColor: `rgb(${255 - (scrollProgress * 255)}, ${255 - (scrollProgress * 255)}, ${255 - (scrollProgress * 255)})`,
              color: `rgb(${scrollProgress * 255}, ${scrollProgress * 255}, ${scrollProgress * 255})`,
              opacity: 1
            }}
          >
            시작하기
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
