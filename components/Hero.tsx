"use client"

import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-highlight/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-scholarship/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-highlight/20 px-4 py-2 text-sm font-medium text-primary">
              UNLOCK YOUR POTENTIAL
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Time To Take Off To Your{" "}
              <span className="text-scholarship">Dream University</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              We provide financial support, mentorship, and application guidance to help scholars 
              from Africa and around the world study abroad. Covering 100% to 25% of academic 
              and immigration-related fees.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                asChild
              >
                <Link href="#services">
                  Apply for Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 px-8"
                asChild
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground lg:text-3xl">500+</p>
                <p className="text-sm text-muted-foreground">Students Helped</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground lg:text-3xl">25+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground lg:text-3xl">100%</p>
                <p className="text-sm text-muted-foreground">Dedication</p>
              </div>
            </div>
          </div>

          {/* Right Content - Bento Grid */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Large Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-highlight p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-primary">Financial Support</h3>
                  <p className="text-sm text-primary/80">
                    Cover 100% to 25% of your academic fees with our scholarship programs.
                  </p>
                </div>
                <GraduationCap className="h-10 w-10 text-primary/60" />
              </div>
            </div>

            {/* Medium Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-scholarship p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <Globe className="mb-4 h-8 w-8 text-scholarship-foreground/80" />
              <h3 className="mb-2 text-lg font-bold text-scholarship-foreground">Global Access</h3>
              <p className="text-sm text-scholarship-foreground/80">
                Study anywhere in the world with our support network.
              </p>
            </div>

            {/* Medium Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <Users className="mb-4 h-8 w-8 text-primary/60" />
              <h3 className="mb-2 text-lg font-bold text-foreground">Expert Mentorship</h3>
              <p className="text-sm text-muted-foreground">
                Get guidance from scholars who have walked this path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
