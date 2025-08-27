import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import dynamic from 'next/dynamic';

// Dynamically import components that use browser APIs
const DynamicEducation = dynamic(() => import('./components/homepage/education'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const DynamicExperience = dynamic(() => import('./components/homepage/experience'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <DynamicExperience />
      <Skills />
      <Projects />
      <DynamicEducation />
      <ContactSection />
    </div>
  )
};