'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="font-pretendard pt-16">
      {/* Hero Section */}
      <section className="bg-background min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              혁신적인 AI로<br />
              <span className="text-primary">아웃소싱의 미래</span>를 만듭니다
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              100x는 인공지능 기술로 소프트웨어 아웃소싱의 새로운 기준을 제시합니다.<br />
              더 빠르고, 더 효율적이며, 더 나은 결과를 위해 혁신합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-neutral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">우리의 미션</h2>
              <p className="text-lg text-foreground/70 mb-6">
                100x는 AI 기술을 통해 소프트웨어 개발 아웃소싱의 효율성을 극대화하여, 
                기업들이 더 빠르고 경제적으로 혁신적인 제품을 만들 수 있도록 돕습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <p>업계 평균 대비 3배 빠른 개발 속도</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <p>프로젝트 비용 50% 이상 절감</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <p>AI 기반 품질 관리 시스템</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-background p-8 rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">왜 100x인가요?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">AI 기반 매칭</h4>
                  <p className="text-foreground/70">
                    프로젝트 요구사항을 AI가 분석하여 최적의 개발팀을 매칭합니다
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">검증된 전문가</h4>
                  <p className="text-foreground/70">
                    10년 이상의 경력을 가진 전문가들이 프로젝트를 완벽하게 수행합니다
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">투명한 프로세스</h4>
                  <p className="text-foreground/70">
                    실시간 진행 상황 공유와 명확한 의사소통으로 신뢰를 구축합니다
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            함께 혁신적인 미래를 만들어가세요
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            AI 기반 아웃소싱으로 프로젝트의 새로운 가능성을 경험하세요
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            무료 상담 시작하기
          </Link>
        </div>
      </section>
    </div>
  );
}
