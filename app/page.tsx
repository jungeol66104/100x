'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-pretendard">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.7
          }}
        />

        {/* Content */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="text-center sm:text-left">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[120px] font-extraBold text-white mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">100배 빠른</span>
                <span className="block">외주개발 속도</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl font-light mx-auto sm:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AI 에이전트를 활용하여 프로젝트 효율성을 극대화하고, 고객님의 소중한 시간과 비용을 대폭 절감해드립니다
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  href="/contact"
                  className="w-fit px-5 py-2 rounded-full transition-all duration-200 text-base hover:scale-105"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    color: 'rgb(0, 0, 0)',
                    opacity: 1
                  }}
                >
                  무료 상담 신청
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-neutral py-12 sm:py-16 md:py-20 hidden">
      </section>

      {/* Section 2 */}
      <section className="bg-background py-12 sm:py-16 md:py-20 hidden">
      </section>

      {/* Section 3 */}
      <section className="bg-neutral py-12 sm:py-16 md:py-20 hidden">
      </section>

      {/* Section 4 */}
      <section className="bg-background py-12 sm:py-16 md:py-20 hidden">
      </section>

      {/* Section 5 */}
      <section className="bg-neutral py-12 sm:py-16 md:py-20 hidden">
      </section>

      {/* Section 6 */}
      <section className="bg-background py-12 sm:py-16 md:py-20 hidden">
      </section>

      {/* Section 7 */}
      <section className="bg-neutral py-12 sm:py-16 md:py-20 hidden">
      </section>
    </div>
  );
}
