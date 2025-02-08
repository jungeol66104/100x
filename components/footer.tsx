'use client';

import Image from "next/image";
import { Card } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-[#10252A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Company Info */}
          <Card className="bg-[#1A353B] border-0 p-5 space-y-3">
            <Image 
              src="/svg/logo.svg"
              alt="100x Logo"
              width={100}
              height={30}
              className="brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              AI 에이전트 기반 소프트웨어 개발 에이전시
            </p>
          </Card>

          {/* Contact */}
          <Card className="bg-[#1A353B] border-0 p-5">
            <h3 className="text-lg font-semibold mb-3">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="text-sm">서울특별시</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">이메일: contact@hanassociates.com</span>
              </li>
              {/* <li className="flex items-center">
                <span className="text-sm">전화: 02-XXX-XXXX</span>
              </li> */}
            </ul>
          </Card>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 100x. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
