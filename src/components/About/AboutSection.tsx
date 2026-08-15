import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { BookOpen, GraduationCap, Calendar } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionReveal from '../ui/SectionReveal';
import SectionMotion from '../ui/SectionMotion';

const profileImg = '/profile.jpeg';

export default function AboutSection() {
  const { personal, education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-[70px] border-b-3 border-[var(--ink)] overflow-hidden">
      <SectionReveal className="max-w-[1100px] mx-auto px-6">
        
        {/* Section Heading */}
        <FadeIn direction="up">
          <div className="text-center md:text-left">
            <span className="inline-block mono text-[12px] font-bold uppercase tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-3 py-1.5 mb-4 shadow-[2px_2px_0px_0px_var(--ink)]">
              // About
            </span>
            <h2 className="font-space text-[28px] sm:text-[36px] md:text-[40px] font-extrabold uppercase text-[var(--ink)] mb-[10px]">
              Who's building this
            </h2>
            <p className="text-[var(--muted)] max-w-[60ch] mb-[36px] font-sans">
              A quick rundown of what I do and where I'm coming from.
            </p>
          </div>
        </FadeIn>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[28px] items-stretch mb-16">
          
          {/* Main Bio Card */}
          <SectionMotion preset="split-left" delay={0.15} className="h-full">
            <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main p-[30px] flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h3 className="font-mono text-base font-bold uppercase border-b-3 border-[var(--ink)] pb-2 flex items-center gap-2 text-[var(--ink)]">
                  <BookOpen className="size-5 text-[var(--acid)]" />
                  <span>Full-Stack & AI Engineer</span>
                </h3>

                {personal.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-[15.5px] text-[var(--ink)] leading-relaxed font-sans">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5 mt-8 pt-6 border-t-3 border-dashed border-[var(--ink)]">
                {personal.quickStats.map((stat, i) => (
                  <div key={i} className="text-center border-2 border-[var(--ink)] p-3 bg-[var(--bg)] shadow-[3px_3px_0px_0px_var(--ink)]">
                    <div className="font-space font-extrabold text-[22px] text-[var(--ink)]">
                      {stat.value}
                    </div>
                    <div className="mono text-[10px] uppercase text-[var(--muted)] mt-1 tracking-[0.03em] font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionMotion>

          {/* Large Picture Frame Card */}
          <SectionMotion preset="split-right" delay={0.25} className="h-full">
            <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main p-6 sm:p-7 flex flex-col justify-center items-center text-center h-full">
              
              {/* Enlarged Photo Container */}
              <div className="w-full max-w-[340px] aspect-[4/5] bg-[var(--bg)] border-4 border-[var(--ink)] shadow-[8px_8px_0px_0px_var(--ink)] rounded-xl overflow-hidden relative group transition-all duration-300">
                <img
                  src={profileImg}
                  alt={personal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-mono font-black text-4xl text-[var(--ink)] -z-10 select-none">
                  LSR
                </div>
              </div>

              {/* Name & Subtitle */}
              <h4 className="font-space text-2xl font-extrabold uppercase text-[var(--ink)] mt-5">
                {personal.name}
              </h4>
              <p className="text-xs font-bold font-mono text-[var(--muted)] uppercase mt-1 tracking-wider">
                Software Engineering Undergrad
              </p>

            </div>
          </SectionMotion>

        </div>

        {/* Education Journey Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <span className="mono inline-block px-3 py-1 text-xs font-black tracking-wider uppercase bg-[var(--ink)] text-[var(--bg)] border-2 border-[var(--ink)] mb-2 shadow-[2px_2px_0px_0px_var(--ink)]">
                ACADEMIC_JOURNEY
              </span>
              <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-[var(--ink)] uppercase">
                Education & Qualification
              </h3>
              <div className="w-16 h-1 bg-[var(--ink)] mx-auto mt-2" />
            </div>
          </FadeIn>

          <div className="relative border-l-3 border-[var(--ink)] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-6">
            {education.map((edu, index) => (
              <FadeIn key={index} direction="right" delay={index * 0.2}>
                <div className="relative">
                  {/* Marker */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1 size-6 rounded-full bg-[var(--bg)] border-3 border-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)] flex items-center justify-center">
                    <div className="size-2.5 rounded-full bg-[var(--acid)]" />
                  </div>

                  <div className="bg-[var(--card)] border-3 border-[var(--ink)] p-6 box-shadow-sm font-mono space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[var(--ink)] pb-3">
                      <div>
                        <span className="text-xs font-bold text-[var(--magenta)] uppercase tracking-widest block mb-0.5">
                          {edu.specialization || 'Software Engineering'}
                        </span>
                        <h4 className="font-space text-xl sm:text-2xl font-extrabold uppercase text-[var(--ink)]">
                          {edu.degree}
                        </h4>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--ink)] text-[var(--bg)] font-bold text-xs border border-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)]">
                        <Calendar className="size-3.5" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                      <GraduationCap className="size-4 text-[var(--acid)]" />
                      <span>{edu.institution}</span>
                      {edu.location && <span className="text-[var(--muted)] text-xs">({edu.location})</span>}
                    </div>

                    <p className="text-[var(--muted)] text-sm font-sans leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </SectionReveal>
    </section>
  );
}
