'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CTAButton from "../ctaButton";

const services = [
  {
    title: "웹사이트",
    description: "반응형 웹사이트부터 복잡한 웹 애플리케이션까지, 최신 기술과 AI를 활용하여 빠르고 안정적으로 구축합니다.",
    image: "/images/web-dev.jpg"
  },
  {
    title: "웹 ERP",
    description: "기업의 모든 업무와 데이터를 웹에서 통합 관리할 수 있는 맞춤형 ERP 시스템을 제공합니다.",
    image: "/images/erp.jpg"
  },
  {
    title: "IT 솔루션", 
    description: "CRM, 그룹웨어, 데이터 분석 등 기업에 필요한 모든 IT 솔루션을 AI 기반으로 구축합니다.",
    image: "/images/crm.jpg"
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
          최신 기술과 AI 자동화로 웹사이트와 웹 ERP를 빠르고 정교하게 구축합니다. 맞춤형 디자인과 강력한 시스템으로 경쟁력을 높이고, 데이터 중심 자동화로 효율을 극대화하세요. 개발 속도와 비용의 한계를 넘어, AI와 함께 새로운 가능성을 경험하세요.
          </p>
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-none border-0">
              {/* <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div> */}
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
