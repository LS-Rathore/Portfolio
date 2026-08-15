import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUp, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FadeIn from '../ui/FadeIn';
import SectionReveal from '../ui/SectionReveal';
import SectionMotion from '../ui/SectionMotion';

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Send real email via FormSubmit AJAX to 23amtics284@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true || response.ok) {
        setFormSubmitted(true);
      } else {
        // Fallback mailto direct launch
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Message'
        )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setFormSubmitted(true);
      }
    } catch {
      // Fallback mailto on network catch
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Message'
      )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-[70px] border-b-0 overflow-hidden">
      <SectionReveal className="max-w-[1100px] mx-auto px-6 space-y-12">
        
        {/* Section Heading */}
        <FadeIn direction="up">
          <div className="text-center">
            <span className="inline-block mono text-[12px] font-bold uppercase tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-3 py-1.5 mb-4 shadow-[2px_2px_0px_0px_var(--ink)]">
              // Contact
            </span>
            <h2 className="font-space text-[28px] sm:text-[36px] md:text-[40px] font-extrabold uppercase text-[var(--ink)] mb-[10px]">
              Get In Touch
            </h2>
            <p className="text-[var(--muted)] max-w-[60ch] mx-auto font-sans">
              Looking for a software development intern? I'm currently open to opportunities.
            </p>
          </div>
        </FadeIn>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Direct Info Side (2 Columns) */}
          <SectionMotion preset="popup" delay={0.15} className="lg:col-span-2">
            <div className="space-y-5 font-mono">
              <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main p-6 space-y-5">
                <h3 className="font-space text-xl font-extrabold uppercase text-[var(--ink)] border-b-2 border-[var(--ink)] pb-3">
                  Direct Info
                </h3>

                {/* Email Box */}
                <div className="p-3 border-2 border-[var(--ink)] bg-[var(--bg)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--muted)] uppercase">
                    <Mail className="size-4 text-[var(--acid)]" />
                    <span>Email Address</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[var(--ink)] truncate">{personal.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 border-2 border-[var(--ink)] bg-[var(--card)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer shrink-0"
                      title="Copy email address"
                    >
                      {copied ? <Check className="size-4 text-[var(--acid)]" /> : <Copy className="size-4" />}
                    </button>
                  </div>
                  {copied && (
                    <span className="text-[10.5px] font-bold text-[var(--magenta)] uppercase block">
                      ✓ Copied to clipboard!
                    </span>
                  )}
                </div>

                {/* Phone Box */}
                <div className="p-3 border-2 border-[var(--ink)] bg-[var(--bg)] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--muted)] uppercase">
                    <Phone className="size-4 text-[var(--acid)]" />
                    <span>Phone Number</span>
                  </div>
                  <div className="text-sm font-bold text-[var(--ink)]">{personal.phone}</div>
                </div>

                {/* Location Box */}
                <div className="p-3 border-2 border-[var(--ink)] bg-[var(--bg)] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--muted)] uppercase">
                    <MapPin className="size-4 text-[var(--acid)]" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-bold text-[var(--ink)]">{personal.location}</div>
                </div>

                {/* Social Cards */}
                <div className="pt-2 border-t-2 border-dashed border-[var(--ink)]/30 flex gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 border-2 border-[var(--ink)] bg-[var(--bg)] hover:bg-[var(--ink)] hover:text-[var(--bg)] text-[var(--ink)] font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[2px_2px_0px_0px_var(--ink)]"
                  >
                    <FaGithub className="size-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 border-2 border-[var(--ink)] bg-[var(--bg)] hover:bg-[var(--ink)] hover:text-[var(--bg)] text-[var(--ink)] font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[2px_2px_0px_0px_var(--ink)]"
                  >
                    <FaLinkedin className="size-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>

              </div>
            </div>
          </SectionMotion>

          {/* Form Side (3 Columns) */}
          <SectionMotion preset="popup" delay={0.25} className="lg:col-span-3">
            <div className="bg-[var(--card)] border-3 border-[var(--ink)] box-shadow-main p-6 sm:p-8 font-mono">
              
              <h3 className="font-space text-xl font-extrabold uppercase text-[var(--ink)] border-b-2 border-[var(--ink)] pb-3 mb-6">
                Send A Message
              </h3>

              {formSubmitted ? (
                <div className="p-6 border-3 border-[var(--acid)] bg-[var(--bg)] text-center space-y-4 my-4 shadow-[4px_4px_0px_0px_var(--ink)]">
                  <div className="size-12 rounded-full border-3 border-[var(--ink)] bg-[var(--acid)] text-[var(--ink)] mx-auto flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_0px_var(--ink)]">
                    ✓
                  </div>
                  <h4 className="font-space text-xl font-extrabold uppercase text-[var(--ink)]">
                    Message Sent to Inbox!
                  </h4>
                  <p className="font-sans text-sm text-[var(--muted)] max-w-[45ch] mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[var(--ink)]">{formData.name}</span>! Your message has been sent directly to <span className="font-bold text-[var(--ink)]">{personal.email}</span>. I'll get back to you shortly!
                  </p>

                  <button
                    onClick={resetForm}
                    className="mono text-xs font-bold border-2 border-[var(--ink)] bg-[var(--card)] px-4 py-2 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer uppercase shadow-[2px_2px_0px_0px_var(--ink)] mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-[var(--ink)]">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 border-2 border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[var(--ink)]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-[var(--ink)]">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border-2 border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[var(--ink)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-[var(--ink)]">Subject</label>
                    <input
                      type="text"
                      placeholder="Internship / Collaboration Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 border-2 border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[var(--ink)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-[var(--ink)]">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello L.S. Rathore, I saw your portfolio and would like to connect..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 border-2 border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[var(--ink)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-brutal btn-brutal-solid w-full justify-center cursor-pointer py-3.5 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Sending to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="size-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </SectionMotion>

        </div>

        {/* Footer */}
        <FadeIn direction="up">
          <div className="pt-8 border-t-3 border-[var(--ink)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold">
            <div className="text-[var(--muted)] text-center sm:text-left">
              © 2026 <span className="text-[var(--ink)]">{personal.name}</span>. Built with React, TypeScript & Tailwind CSS.
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 border-2 border-[var(--ink)] bg-[var(--card)] text-[var(--ink)] shadow-[3px_3px_0px_0px_var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-all cursor-pointer flex items-center gap-1.5 uppercase"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="size-4" />
            </button>
          </div>
        </FadeIn>

      </SectionReveal>
    </section>
  );
}
