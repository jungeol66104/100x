'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicePage() {
  const steps = [
    {
      title: "프로젝트 요청",
      description: "프로젝트의 규모, 기술 스택, 일정을 입력하시면 AI가 즉시 분석을 시작합니다",
      icon: "📝"
    },
    {
      title: "AI 기반 분석",
      description: "AI가 프로젝트 요구사항을 분석하여 최적의 개발 방식과 리소스를 산출합니다",
      icon: "🤖"
    },
    {
      title: "최적의 개발팀 구성",
      description: "검증된 개발자 풀에서 프로젝트에 가장 적합한 팀을 구성합니다",
      icon: "👥"
    },
    {
      title: "빠른 개발 진행",
      description: "AI 기반 프로젝트 관리로 개발 속도와 품질을 최적화합니다",
      icon: "⚡"
    },
    {
      title: "완성 & 납품",
      description: "철저한 품질 검수를 거쳐 완성된 프로젝트를 전달해드립니다",
      icon: "✨"
    }
  ];

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
              AI로 진화하는<br />
              <span className="text-primary">새로운 아웃소싱</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              전통적인 아웃소싱 대비 3배 더 빠르고 50% 더 저렴한<br />
              100x의 AI 기반 아웃소싱을 경험해보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-neutral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            AI 기반 프로젝트 진행 과정
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl shadow-sm relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl text-primary">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">3배 더 빠르게</h3>
              <p className="text-foreground/70">
                AI 기반 매칭으로 평균 계약 기간<br />3일 이내 달성
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">50% 비용 절감</h3>
              <p className="text-foreground/70">
                최적화된 리소스 배분으로<br />프로젝트 비용 대폭 감소
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">정확한 매칭</h3>
              <p className="text-foreground/70">
                AI가 분석한 프로젝트 요구사항에<br />가장 적합한 개발팀 배정
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            AI 기반 아웃소싱으로 프로젝트 시작하기
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
