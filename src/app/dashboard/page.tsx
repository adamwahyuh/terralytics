"use client";

import { aboutCompany } from "@/lib/about";
import StepIndicator from "@/components/step/StepIndicator";
import { useState, useEffect, useRef } from "react";


// Section
import FirstSection from "@/section/dashboard/FirstSection";
import SecondSection from "@/section/dashboard/SecondSection";
export default function Home() {
    
    return (
    <div className="">
        <FirstSection />
        <SecondSection />
    </div>
    )
}
