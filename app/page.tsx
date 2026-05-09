import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { Hero } from "@/sections/Hero";
import { Signals } from "@/sections/Signals";
import { Skills } from "@/sections/Skills";
import { ProjectConstellation } from "@/sections/ProjectConstellation";
import { ProofOfSkill } from "@/sections/ProofOfSkill";
import { Signature } from "@/sections/Signature";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <ExperienceShell>
      <Hero />
      <Signals />
      <Skills />
      <ProjectConstellation />
      <ProofOfSkill />
      <Signature />
      <Contact />
    </ExperienceShell>
  );
}
