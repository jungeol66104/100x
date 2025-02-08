'use client'

import HeroSection from "@/components/sections/heroSection";
import ServiceSection from "@/components/sections/serviceSection";
import PainPointSection from "@/components/sections/painPointSection";

export default function Home() {
  return (
    <div className="font-pretendard">
      <HeroSection />
      <ServiceSection />
      <PainPointSection />

      {/* Digital Workers Section */}
      <section className="bg-sub-2 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto">
            <div className="bg-sub-3 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col items-center">
              <h2 className="text-xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
                지금 100x와 협업하세요
              </h2>
              <p className="max-w-4xl text-lg text-gray-600 mb-8 text-center">
                AI 에이전트와 함께 완성도 높은 소프트웨어를 제작합니다. 기획부터 개발, 테스트, 배포, 유지보수까지 전체 제품 개발 과정을 AI가 지원하여 빠르고 효율적으로 진행합니다. 24시간 365일 끊김 없는 개발로 최고의 결과물을 제공해드립니다.
              </p>
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform">
                  시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
