"use client";
import React from "react";
// Import from your actual file structure
import HeaderAlpha from "@/components/headers/HeaderAlpha";
import AboutAlpha from "@/components/sections/alpha/AboutAlpha";
import FooterAlpha from "@/components/footers/FooterAlpha";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* 1. Use HeaderAlpha instead of Navbar */}
      <HeaderAlpha />
      
      {/* 2. Main Content Section */}
      <div className="flex-grow">
        {/* Spacer to account for fixed header height */}
        <div className="h-20 md:h-24" /> 
        
        <AboutAlpha />
      </div>

      {/* 3. Use FooterAlpha instead of Footer */}
      <FooterAlpha />
    </main>
  );
}