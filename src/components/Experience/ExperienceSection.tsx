import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ChevronRight } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionReveal from '../ui/SectionReveal';
import SectionMotion from '../ui/SectionMotion';

export default function ExperienceSection() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-[70px] border-b-3 border-[var(--ink)] overflow-hidden">
      <SectionReveal className="max-w-[1100px] mx-auto px-6">
        
        {/* Kicker & Title */}
        <FadeIn direction="up">
          <span className="inline-block mono text-[12px] font-bold uppercase tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-3 py-1.5 mb-4">
            // Experience
          </span>
          <h2 className="font-space text-[28px] sm:text-[36px] md:text-[40px] font-extrabold uppercase text-[var(--ink)] mb-[10px]">
            Where I've worked
          </h2>
          <p className="text-[var(--muted)] max-w-[60ch] mb-[36px] font-sans">
            The internship that kicked off the agile-team side of my resume.
          </p>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative max-w-[820px]">
          
          {/* Vertical Bar */}
          <div className="absolute left-[14px] top-[6px] bottom-[6px] w-[4px] bg-[var(--ink)]" />

          {/* Timeline Item */}
          {experiences.map((exp, idx) => (
            <SectionMotion key={idx} preset="timeline-draw" delay={0.2}>
              <div className="relative pl-[52px]">
                
                {/* Dot Node */}
                <div className="absolute left-[4px] top-[6px] w-[22px] h-[22px] rounded-full bg-[var(--acid)] border-3 border-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)]" />

                {/* Card */}
                <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-sm p-6 sm:p-8 relative space-y-4 font-mono">
                  
                  {/* Rotated Tag Badge */}
                  <span className="absolute -top-[13px] right-5 bg-[var(--magenta)] text-white mono text-[10.5px] font-bold px-2.5 py-1 border-2 border-[var(--ink)] rotate-[2.5deg] shadow-[2px_2px_0px_0px_var(--ink)]">
                    {exp.type}
                  </span>

                  {/* Role & Company */}
                  <div>
                    <h3 className="font-space font-extrabold text-[22px] sm:text-[24px] text-[var(--ink)]">
                      {exp.role} — {exp.company}
                    </h3>
                    <div className="mono text-[12px] text-[var(--muted)] mt-1 font-semibold">
                      {exp.period} ({exp.location})
                    </div>
                  </div>

                  {/* Bullets List */}
                  <ul className="space-y-2.5 font-sans text-[14.5px] text-[var(--ink)] leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <ChevronRight className="size-4 shrink-0 text-[var(--acid)] mt-1 font-bold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t-2 border-dashed border-[var(--ink)]/30">
                    <span className="text-[11px] font-bold uppercase text-[var(--muted)] block mb-2">
                      Technologies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 bg-[var(--bg)] border-2 border-[var(--ink)] text-xs font-semibold text-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)]"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </SectionMotion>
          ))}

        </div>

      </SectionReveal>
    </section>
  );
}
