"use client";
import StepCircle from "./StepCircle";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

export default function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex-col items-center relative hidden md:flex">
      <div className="absolute top-5 bottom-5 w-[1px] md:w-[2px] bg-white z-1" />
      {steps.map((_, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <StepCircle
            number={idx + 1}
            active={currentStep === idx + 1}
            onClick={() => onStepClick(idx + 1)}
          />
          {idx < steps.length - 1 && <div className="h-10" />}
        </div>
      ))}
    </div>
  );
}
