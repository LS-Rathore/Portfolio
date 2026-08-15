import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Terminal, FileText, ArrowRight } from 'lucide-react';
import SectionMotion from '../ui/SectionMotion';

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;
  const roles = personal.heroTerminalRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 45;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === targetText) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          targetText.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="min-h-screen pt-20 pb-16 flex items-center justify-center max-w-[1100px] mx-auto px-6 overflow-hidden">
      <div className="w-full">
        <SectionMotion preset="boot" delay={0.1}>
          
          {/* Retro OS Window Container */}
          <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main overflow-hidden">
            
            {/* Window Bar Header */}
            <div className="flex items-center justify-between bg-[var(--ink)] text-[var(--bg)] px-4 py-3 mono text-[12px] select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-[11px] h-[11px] rounded-full border-2 border-[var(--bg)] bg-[#FF5F56]" />
                <span className="w-[11px] h-[11px] rounded-full border-2 border-[var(--bg)] bg-[#FFBD2E]" />
                <span className="w-[11px] h-[11px] rounded-full border-2 border-[var(--bg)] bg-[#27C93F]" />
              </div>
              <span className="uppercase tracking-[0.08em] font-bold text-xs flex items-center gap-1.5 opacity-90">
                <Terminal className="size-3.5 text-[var(--acid)]" />
                LS_RATHORE.EXE
              </span>
              <div className="text-[10px] sm:text-xs font-bold border-2 border-[var(--bg)] bg-[var(--bg)] text-[var(--ink)] px-2 py-0.5 select-none hidden sm:block">
                SYS_INIT
              </div>
            </div>

            {/* Window Main Content */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-5 text-left">
              
              {/* Internship Status Badge */}
              <div className="self-start inline-flex items-center gap-2 mono text-[12.5px] font-bold uppercase tracking-[0.06em] border-2 border-[var(--ink)] bg-[var(--card)] px-3 py-1.5 shadow-[3px_3px_0px_0px_var(--ink)] text-[var(--ink)]">
                <span className="w-[7px] h-[7px] rounded-full bg-[var(--acid)] animate-pulse" />
                <span>{personal.badgeText}</span>
              </div>

              {/* Name Heading */}
              <div className="space-y-1">
                <h1 className="font-space text-[38px] sm:text-[54px] md:text-[66px] font-extrabold text-[var(--ink)] leading-[1.02] tracking-[-0.01em] select-none">
                  {personal.name}<span className="opacity-35">.</span>
                </h1>
                <div className="w-[100px] sm:w-[120px] h-[9px] bg-[var(--ink)] mt-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]" />
              </div>

              {/* Terminal Typing Prompt */}
              <div className="border-2 border-[var(--ink)] p-3.5 sm:px-4 sm:py-3.5 mono font-bold text-[16px] sm:text-[19px] bg-[var(--bg)] text-[var(--ink)] flex items-center shadow-[3px_3px_0px_0px_var(--ink)]">
                <span className="mr-2 text-[var(--acid)] select-none">&gt;</span>
                <span className="min-h-[28px]">{currentText}</span>
                <span className="ml-1 text-[var(--magenta)] animate-pulse font-bold">▍</span>
              </div>

              {/* Bio Description */}
              <p className="text-[16px] sm:text-[17.5px] max-w-[62ch] text-[var(--muted)] leading-relaxed font-sans">
                {personal.bio[0]}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-[14px] pt-2 font-mono">
                <button
                  onClick={scrollToProjects}
                  className="btn-brutal btn-brutal-solid cursor-pointer justify-center"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="size-4" />
                </button>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-dashed text-[var(--ink)] cursor-pointer justify-center"
                >
                  <FileText className="size-4" />
                  <span>View Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-[12px] pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="border-2 border-[var(--ink)] p-2.5 bg-[var(--card)] shadow-[3px_3px_0px_0px_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-[var(--ink)]"
                >
                  <FaGithub className="size-5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="border-2 border-[var(--ink)] p-2.5 bg-[var(--card)] shadow-[3px_3px_0px_0px_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-[var(--ink)]"
                >
                  <FaLinkedin className="size-5" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email Address"
                  className="border-2 border-[var(--ink)] p-2.5 bg-[var(--card)] shadow-[3px_3px_0px_0px_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-[var(--ink)]"
                >
                  <Mail className="size-5" />
                </a>

                <div className="ml-auto mono text-xs font-bold text-[var(--muted)] uppercase hidden sm:block">
                  📍 {personal.location}
                </div>
              </div>

            </div>

          </div>

        </SectionMotion>
      </div>
    </header>
  );
}
