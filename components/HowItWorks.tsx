"use client"

import { FileText, CheckCircle, Key, CreditCard } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Choose a Service",
    description: "Browse our available support services and select the one that matches your needs.",
    icon: FileText,
    color: "bg-[#2563EB]",
  },
  {
    number: "02",
    title: "Complete Application",
    description: "Fill out the eligibility form with your academic details and application information.",
    icon: CheckCircle,
    color: "bg-[#059669]",
  },
  {
    number: "03",
    title: "Get Your Code",
    description: "Receive a unique eligibility code upon successful application submission.",
    icon: Key,
    color: "bg-[#D97706]",
  },
  {
    number: "04",
    title: "Redeem Support",
    description: "Use your code to claim your financial support when ready for payment.",
    icon: CreditCard,
    color: "bg-[#DB2777]",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white dark:bg-[#1D1D1F] py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#1D4ED8]/10 px-5 py-2 text-sm font-semibold text-[#1D4ED8] dark:bg-[#1D4ED8]/20 dark:text-[#60A5FA]">
            HOW IT WORKS
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl text-balance">
            Your Path to Financial Support
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 text-pretty">
            Getting support is simple. Follow these four easy steps to unlock financial 
            assistance for your academic journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 lg:block" style={{ left: '50%' }} />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                {/* Step Number */}
                <div className={`relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-3xl ${step.color} shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Number Badge */}
                <span className="mb-3 text-sm font-bold text-[#B7F34B]">{step.number}</span>
                
                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
