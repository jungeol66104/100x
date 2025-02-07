'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-pretendard">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              아웃소싱을 <span className="text-primary">100배</span> 더<br />
              빠르고 저렴하게
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI 기반 매칭 시스템으로 최적의 개발팀을 찾아 프로젝트 비용과 시간을 획기적으로 절감해드립니다
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
                무료 상담 신청
              </Link>
              <Link href="/service" className="px-8 py-4 bg-background border border-foreground/10 text-foreground rounded-lg hover:bg-neutral/10 transition-colors duration-200">
                서비스 소개
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-neutral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">왜 100x인가요?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "비용 절감",
                description: "AI 매칭으로 프로젝트 비용 최대 60% 절감",
                icon: "💰"
              },
              {
                title: "시간 단축",
                description: "평균 계약 소요 기간 3일 이내 달성",
                icon: "⚡"
              },
              {
                title: "품질 보장",
                description: "검증된 개발팀과 프로젝트 품질 보증",
                icon: "✨"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-background p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            프로젝트 상담부터 계약까지 모든 과정을 100x와 함께하세요
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
