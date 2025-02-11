import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CTAButton from "../ctaButton";

type ServiceKey = "speed" | "business" | "cost" | "communication";

type Service = {
  title: string;
  description: string;
};

type Services = {
  [K in ServiceKey]: Service;
};

const PainPointSection = () => {
    const [selectedService, setSelectedService] = useState<ServiceKey>("speed");
    
    const benefits = [
      ["100배 빠른 개발 속도", "비용 절감 효과", "실시간 소통", "AI 품질 관리"],
      ["정확한 일정 준수", "초고속, 그러나 고품질", "24/7 기술 지원", "맞춤형 솔루션"],
      ["데이터 기반 의사결정", "확장 가능한 시스템", "보안 최적화", "글로벌 스탠다드"]
    ];

    const services: Services = {
      speed: {
        title: "100배 빠른 개발 속도",
        description: "AI 자동화 기술을 활용하여 개발 시간을 대폭 단축합니다. 반복적인 작업을 자동화하고, 코드 생성을 최적화하여 프로젝트 완료 시간을 획기적으로 줄입니다."
      },
      business: {
        title: "비즈니스 맞춤형",
        description: "비즈니스 요구사항에 맞춤형 솔루션을 제공합니다. 공장형 템플릿으로 찍어내지 않습니다. 고객의 비즈니스를 정확히 이해해서 최적화된 솔루션을 제공합니다."
      },
      cost: {
        title: "비용 절감",
        description: "AI 기술을 활용한 효율적인 프로세스로 퀄리티 대비 개발 비용을 최소화합니다. 반복적인 작업의 자동화와 리소스 최적화를 통해 프로젝트 전반의 비용 효율성을 높입니다."
      },
      communication: {
        title: "딥 커뮤니케이션",
        description: "마치 사내 개발팀처럼 긴밀하게 소통합니다. 실시간 협업 도구와 투명한 진행 현황 공유로 프로젝트의 모든 이해관계자가 한 팀처럼 움직입니다."
      }
    };

    return (
      <section className="bg-sub-2 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold mb-6 text-black">
              개발의 어려움, 저희가 해결해드립니다
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            일정 지연, 높은 비용, 비효율적인 커뮤니케이션 - 기존 외주 개발의 한계를 AI 에이전트로 극복합니다. 자동화된 최적화 프로세스를 통해 빠르고 정교한 제품을 제공받고, 개발 속도를 높이고, 비용을 절감하세요.
            </p>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center">
                <CTAButton />
              </div>
            </motion.div>

            {/* Triple row ticker container */}
            <div className="relative w-full h-40 overflow-hidden space-y-2">
              {benefits.map((row, rowIndex) => (
                <div 
                  key={rowIndex}
                  className="relative h-10 overflow-hidden rounded-lg"
                >
                  {/* Left gradient */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-sub-2 to-transparent"></div>
                  
                  <div 
                    className="absolute flex whitespace-nowrap"
                    style={{
                      animation: `scroll${rowIndex % 2 === 0 ? 'Left' : 'Right'} 40s linear infinite`,
                      display: 'flex',
                      width: 'fit-content'
                    }}
                  >
                    {[...row, ...row, ...row].map((benefit, index) => (
                      <div 
                        key={index}
                        className="inline-flex items-center px-6 h-10 mx-1 bg-black/5 rounded-md"
                      >
                        <span className="w-2 h-2 bg-black mr-2 rounded-[25%]"></span>
                        <span className="text-gray-800 font-medium whitespace-nowrap">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right gradient */}
                  <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-sub-2 to-transparent"></div>
                </div>
              ))}
            </div>
            <style jsx>{`
              @keyframes scrollLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
              @keyframes scrollRight {
                0% { transform: translateX(-33.33%); }
                100% { transform: translateX(0); }
              }
            `}</style>
          </motion.div>
  
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-12">
              {/* Service list with mobile-responsive content */}
              <div className="space-y-6 md:w-1/3">
                {Object.entries(services).map(([key, service], index) => (
                  <div key={key}>
                    <div
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedService === key 
                          ? 'text-black' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                      onClick={() => setSelectedService(key as ServiceKey)}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm font-medium">0{index + 1}</span>
                        <h3 className="text-[32px] font-medium leading-tight">{service.title}</h3>
                      </div>
                    </div>

                    {/* Mobile content - shows below each title */}
                    {selectedService === key && (
                      <motion.div 
                        key={key}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 ml-8 space-y-4"
                      >
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {service.description}
                        </p>
                        <div className="w-full border-t border-gray-200 mt-6"></div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Desktop content - shows on the right side */}
              <div className="hidden md:w-2/3 md:flex">
                <motion.div 
                  key={selectedService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 flex flex-col flex-1"
                >
                  <h3 className="text-3xl font-medium text-black">
                    {services[selectedService].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed flex-1">
                    {services[selectedService].description}
                  </p>
                  <div className="hidden">
                    <button className="text-black hover:text-gray-700 font-medium flex items-center gap-2">
                      더보기
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="w-full border-t border-gray-200 mt-6"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

export default PainPointSection;