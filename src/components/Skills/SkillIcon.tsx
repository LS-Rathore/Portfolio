import { 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiNodedotjs, 
  SiExpress, 
  SiJsonwebtokens, 
  SiLangchain, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiPrisma, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiVercel, 
  SiRender, 
  SiSupabase, 
  SiPython, 
  SiC 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { Sparkles, Terminal, ShieldCheck, Cpu } from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
}

export default function SkillIcon({ name, className = "size-5" }: SkillIconProps) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('react')) return <SiReact className={`${className} text-[#61DAFB]`} />;
  if (normalized.includes('tailwind')) return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
  if (normalized.includes('typescript')) return <SiTypescript className={`${className} text-[#3178C6]`} />;
  if (normalized.includes('javascript')) return <SiJavascript className={`${className} text-[#F7DF1E]`} />;
  if (normalized.includes('html5') || normalized.includes('html')) return <SiHtml5 className={`${className} text-[#E34F26]`} />;
  if (normalized.includes('css3') || normalized.includes('css')) return <FaCss3Alt className={`${className} text-[#1572B6]`} />;
  if (normalized.includes('node')) return <SiNodedotjs className={`${className} text-[#5FA04E]`} />;
  if (normalized.includes('express')) return <SiExpress className={`${className}`} />;
  if (normalized.includes('jwt') || normalized.includes('auth')) return <SiJsonwebtokens className={`${className} text-[#000000] dark:text-white`} />;
  if (normalized.includes('langchain')) return <SiLangchain className={`${className} text-emerald-500`} />;
  if (normalized.includes('mongodb') || normalized.includes('vector')) return <SiMongodb className={`${className} text-[#47A248]`} />;
  if (normalized.includes('gemini') || normalized.includes('generative')) return <Sparkles className={`${className} text-amber-400`} />;
  if (normalized.includes('rag')) return <Cpu className={`${className} text-[var(--acid)]`} />;
  if (normalized.includes('postgres')) return <SiPostgresql className={`${className} text-[#4169E1]`} />;
  if (normalized.includes('mysql')) return <SiMysql className={`${className} text-[#4479A1]`} />;
  if (normalized.includes('prisma')) return <SiPrisma className={`${className}`} />;
  if (normalized.includes('git') && !normalized.includes('github')) return <SiGit className={`${className} text-[#F05032]`} />;
  if (normalized.includes('github')) return <SiGithub className={`${className}`} />;
  if (normalized.includes('postman')) return <SiPostman className={`${className} text-[#FF6C37]`} />;
  if (normalized.includes('vercel')) return <SiVercel className={`${className}`} />;
  if (normalized.includes('render')) return <SiRender className={`${className}`} />;
  if (normalized.includes('supabase')) return <SiSupabase className={`${className} text-[#3ECF8E]`} />;
  if (normalized.includes('vs code') || normalized.includes('vscode')) return <VscCode className={`${className} text-[#007ACC]`} />;
  if (normalized.includes('python')) return <SiPython className={`${className} text-[#3776AB]`} />;
  if (normalized.includes('java') && !normalized.includes('javascript')) return <FaJava className={`${className} text-[#007396]`} />;
  if (normalized === 'c') return <SiC className={`${className} text-[#A8B9CC]`} />;
  if (normalized.includes('rest')) return <Terminal className={`${className} text-[var(--acid)]`} />;

  return <ShieldCheck className={`${className} text-[var(--acid)]`} />;
}
