"use client";

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import CompanyDetails from "@/components/CompanyDetails";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectDiscuss from "@/components/ProjectDiscuss";
import AppDevStages from "@/components/AppDevStages";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <LogoBar />
      <CompanyDetails />
      <ProjectDetails />
      <ProjectDiscuss />
      <AppDevStages />
      <Team />
      <Footer />
    </div>
  );
}
