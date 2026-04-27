import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { Hero } from "@/sections/Hero";
import { ProjectConstellation } from "@/sections/ProjectConstellation";
import { Signals } from "@/sections/Signals";

export default function Home() {
  return (
    <ExperienceShell>
      <Hero />
      <Signals />
      <ProjectConstellation />
    </ExperienceShell>
  );
}
