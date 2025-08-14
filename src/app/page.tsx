"use client";

import { aboutCompany } from "@/lib/about";
import StepIndicator from "@/components/step/StepIndicator";
import { useState, useEffect, useRef } from "react";

// Section
import AboutSection from "@/section/home/about";
import DashboardSection from "@/section/home/DashboardSection";
import AIFeaturesSection from "@/section/home/AiFeaturedSection";
import SmartAgricultureSection from "@/section/home/SmartAgricultureSection";

export default function Home() {
  const company = aboutCompany[0];

  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Section 1", "Section 2", "Section 3", "Section 4"];

  // Refs untuk tiap section
  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  // Update active step saat scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setCurrentStep(index + 1);
            }
          }
        });
      },
      { threshold: 0.6 } // 60% section terlihat
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    const target = sectionRefs[step - 1].current;
    if (target) {
      const navbar = document.querySelector("header"); 
      const navbarHeight = navbar ? navbar.clientHeight : 0;
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <article>
        <div id="section-1" ref={sectionRefs[0]}>
          <AboutSection />
        </div>

        <div
          className="z-10 relative w-full py-16 bg-cover"
          style={{
            backgroundImage: "url('/img/gunung.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-md"></div>

          <div id="section-2" ref={sectionRefs[1]}>
            <DashboardSection />
          </div>
          <div id="section-3" ref={sectionRefs[2]}>
            <AIFeaturesSection />
          </div>
          <div id="section-4" ref={sectionRefs[3]}>
            <SmartAgricultureSection />
          </div>
        </div>
      </article>

      {/* Step Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
      </div>
    </div>
  );
}
