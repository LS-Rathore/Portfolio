import { PORTFOLIO_DATA } from '@/data/portfolioData';
import FadeIn from '../ui/FadeIn';
import SectionReveal from '../ui/SectionReveal';
import SectionMotion from '../ui/SectionMotion';
import SkillIcon from './SkillIcon';
import { Code2, Terminal, Cpu, Database, Wrench, Layers } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Frontend Development': Code2,
  'Backend & APIs': Terminal,
  'AI & Vector Search': Cpu,
  'Databases & ORM': Database,
  'Tools & Deployment': Wrench,
  'Programming Languages': Layers,
};

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-[80px] border-b-3 border-[var(--ink)] overflow-hidden">
      <SectionReveal className="max-w-[1100px] mx-auto px-6">
        
        {/* Kicker & Title */}
        <FadeIn direction="up">
          <div className="text-center md:text-left mb-[40px]">
            <span className="inline-block mono text-[12px] font-bold uppercase tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-3 py-1.5 mb-4 shadow-[2px_2px_0px_0px_var(--ink)]">
              // Tech Stack & Capabilities
            </span>
            <h2 className="font-space text-[32px] sm:text-[42px] md:text-[48px] font-extrabold uppercase text-[var(--ink)] mb-[10px]">
              Skills & Technologies
            </h2>
            <p className="text-[var(--muted)] text-[16.5px] max-w-[65ch] font-sans">
              The tools, frameworks, and technologies I reach for when shipping products.
            </p>
          </div>
        </FadeIn>

        {/* Horizontal Card Rows - Justified & Uniform Alignment */}
        <div className="space-y-6">
          {skills.map((category, idx) => {
            const IconComponent = categoryIcons[category.title] || Code2;
            const wavePreset = idx % 2 === 0 ? 'wave-left' : 'wave-right';

            return (
              <SectionMotion key={idx} preset={wavePreset} delay={idx * 0.08}>
                <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0px_0px_var(--ink)] transition-all duration-200">
                  
                  {/* Left Category Label Badge - Uniform Width Alignment */}
                  <div className="inline-flex items-center gap-3 mono text-sm font-extrabold uppercase tracking-[0.05em] bg-[var(--ink)] text-[var(--bg)] px-4 py-3 shadow-[3px_3px_0px_0px_var(--ink)] shrink-0 w-full md:w-[260px]">
                    <IconComponent className="size-5 text-[var(--acid)] shrink-0" />
                    <span className="truncate">{category.title}</span>
                  </div>

                  {/* Right Skill Chips - Justified Horizontal Flex Layout */}
                  <div className="flex flex-wrap items-center justify-start gap-3.5 flex-grow">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="mono text-sm font-bold border-2 border-[var(--ink)] px-4 py-2.5 bg-[var(--bg)] shadow-[3px_3px_0px_0px_var(--ink)] text-[var(--ink)] flex items-center gap-2.5 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-all cursor-default group"
                      >
                        <SkillIcon name={skill.name} className="size-5 shrink-0 transition-transform group-hover:scale-110" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </SectionMotion>
            );
          })}
        </div>

      </SectionReveal>
    </section>
  );
}
