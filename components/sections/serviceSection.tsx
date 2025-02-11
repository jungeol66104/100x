'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CTAButton from "../ctaButton";

const services = [
  {
    title: "웹사이트",
    description: "반응형 웹사이트부터 맞춤형 쇼핑몰까지, AI 기반 초고속 개발로 구축합니다. 결제, 재고 관리, 회원 관리 등 이커머스의 모든 핵심 기능을 포함하며, SEO 친화적인 구조로 온라인 비즈니스의 성장을 지원합니다.",
  },
  {
    title: "앱 (Flutter, RN)",
    description: "iOS와 Android를 모두 지원하는 크로스플랫폼 모바일 앱을 개발합니다. 웹뷰 최적화와 네이티브 기능 연동으로 완성도 높은 앱을 제공하며, AI 기반 빠른 개발로 시장 진입을 앞당깁니다.",
  },
  {
    title: "어드민 · ERP · CRM",
    description: "기업 운영에 필요한 관리자 시스템, 자원관리, 고객관리 솔루션을 각각 제공합니다. 각 시스템의 특성에 맞춘 AI 기반 자동화로 업무 효율을 극대화하며, 필요한 기능만 선택하여 도입할 수 있어 비용 효율적입니다.",
  }
];

const ServiceSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black mb-6">
            서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            AI 에이전트를 활용한 초고속 개발로 웹사이트부터 엔터프라이즈 솔루션까지 다양한 소프트웨어를 제공합니다. 최신 기술과 AI 자동화로 개발 속도와 품질을 동시에 높이고, 비용 효율적인 솔루션으로 비즈니스 성장을 가속화하세요.
          </p>
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-none border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b pb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
