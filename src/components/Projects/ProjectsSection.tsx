import { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '@/data/portfolioData';
import { X, Sparkles, CheckCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import SectionReveal from '../ui/SectionReveal';
import SectionMotion from '../ui/SectionMotion';

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & RAG', 'Full-Stack & AI', 'AI & Next.js', 'Full-Stack MERN'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-[70px] border-b-3 border-[var(--ink)] overflow-hidden">
      <SectionReveal className="max-w-[1100px] mx-auto px-6">
        
        {/* Kicker & Title */}
        <FadeIn direction="up">
          <span className="inline-block mono text-[12px] font-bold uppercase tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-3 py-1.5 mb-4">
            // Selected work
          </span>
          <h2 className="font-space text-[28px] sm:text-[36px] md:text-[40px] font-extrabold uppercase text-[var(--ink)] mb-[10px]">
            Projects
          </h2>
          <p className="text-[var(--muted)] max-w-[60ch] mb-[30px] font-sans">
            Four full-stack builds, each shipped end-to-end.
          </p>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2.5 mb-10 mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 border-2 border-[var(--ink)] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--ink)] text-[var(--bg)] shadow-[3px_3px_0px_0px_var(--ink)]'
                    : 'bg-[var(--card)] text-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_var(--ink)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid with 3D Zoom Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
          {filteredProjects.map((proj, idx) => (
            <SectionMotion key={proj.id} preset="grid-zoom" delay={idx * 0.12}>
              <div
                className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0px_0px_var(--ink)] transition-all duration-150 flex flex-col justify-between h-full"
              >
                {/* Project Window Bar */}
                <div className="flex items-center gap-2 bg-[var(--ink)] text-[var(--bg)] px-3.5 py-2.5 mono text-[11px] select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-[9px] h-[9px] rounded-full border-2 border-[var(--bg)] bg-[#FF5F56]" />
                    <span className="w-[9px] h-[9px] rounded-full border-2 border-[var(--bg)] bg-[#FFBD2E]" />
                    <span className="w-[9px] h-[9px] rounded-full border-2 border-[var(--bg)] bg-[#27C93F]" />
                  </div>
                  <span className="font-semibold tracking-[0.05em]">{proj.runTitle}</span>
                  {proj.badge && (
                    <span className="px-1.5 py-0.2 bg-[var(--acid)] text-[var(--ink)] font-black text-[9.5px] uppercase border border-[var(--bg)]">
                      {proj.badge}
                    </span>
                  )}
                  <span className="ml-auto mono font-bold tracking-[0.05em] text-[var(--acid)]">
                    {proj.numIndex}
                  </span>
                </div>

                {/* Project Window Body */}
                <div className="p-[22px] flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-space font-extrabold text-[21px] text-[var(--ink)] mb-[10px]">
                      {proj.title}
                    </h3>

                    <p className="text-[14px] text-[var(--muted)] mb-[14px] font-sans leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Highlights Bullet Snippet */}
                    <ul className="mb-4 space-y-1.5 font-sans text-xs text-[var(--ink)]">
                      {proj.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="size-3.5 shrink-0 text-[var(--acid)] mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tag Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-[16px]">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="mono text-[10.5px] border-2 border-[var(--ink)] px-2 py-0.5 bg-[var(--bg)] text-[var(--ink)] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t-2 border-dashed border-[var(--ink)]/30">
                    <div className="flex items-center gap-3">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono text-[12.5px] font-bold underline underline-offset-4 text-[var(--ink)] hover:text-[var(--magenta)] flex items-center gap-1"
                        >
                          <span>View code</span>
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      )}
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono text-[12.5px] font-bold underline underline-offset-4 text-[var(--cobalt)] hover:text-[var(--magenta)] flex items-center gap-1"
                        >
                          <span>Live app</span>
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="mono text-[11px] font-bold border-2 border-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  </div>

                </div>

              </div>
            </SectionMotion>
          ))}
        </div>

      </SectionReveal>

      {/* Project Detail Animated Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main max-w-2xl w-full max-h-[90vh] overflow-y-auto text-[var(--ink)]"
            >
              {/* Modal Header */}
              <div className="bg-[var(--ink)] text-[var(--bg)] px-6 py-3.5 flex items-center justify-between sticky top-0 z-10 mono">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[var(--acid)]" />
                  <h3 className="font-space text-lg font-extrabold uppercase">
                    {selectedProject.title} ({selectedProject.runTitle})
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 border-2 border-[var(--bg)] bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--magenta)] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 font-mono">
                <div>
                  <span className="px-2.5 py-0.5 bg-[var(--acid)] text-[var(--ink)] font-bold text-xs uppercase border border-[var(--ink)] inline-block mb-3">
                    {selectedProject.category}
                  </span>
                  <p className="font-sans text-sm text-[var(--muted)] leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase border-b-2 border-[var(--ink)] pb-2 mb-3 text-[var(--ink)]">
                    Key Technical Features
                  </h4>
                  <ul className="space-y-2 font-sans text-sm text-[var(--ink)]">
                    {selectedProject.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="size-4 shrink-0 text-[var(--acid)] mt-1" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase border-b-2 border-[var(--ink)] pb-2 mb-3 text-[var(--ink)]">
                    Applied Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs border-2 border-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t-3 border-[var(--ink)] flex items-center justify-end gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal text-xs"
                    >
                      <FaGithub className="size-4" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal btn-brutal-solid text-xs"
                    >
                      <ExternalLink className="size-4" />
                      <span>Live Product</span>
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
