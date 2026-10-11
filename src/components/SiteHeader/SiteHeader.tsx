import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const linkClass =
  "flex items-center gap-[7px] transition-colors hover:text-muted-foreground";

export const SiteHeader = () => {
  const reduced = useReducedMotion();

  return (
    <header className="flex flex-wrap items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] py-6">
      <div className="flex flex-wrap items-baseline gap-4">
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="block text-[28px] font-medium leading-[1.05] tracking-[-0.035em]"
          >
            Victoras Isaakidis
          </motion.span>
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduced ? 0 : 0.6,
            delay: reduced ? 0 : 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="font-mono text-[12px] text-muted-foreground"
        >
          Full stack software developer
        </motion.span>
      </div>
      <nav className="flex items-center gap-[22px] font-mono text-[12px]">
        <a
          href="https://github.com/victoras24"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/victoras-isaakidis-217b71227/"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
        <a href="mailto:esaakidis@gmail.com" className={linkClass}>
          <Mail size={14} />
          Email
        </a>
        <a
          href="/resume.pdf"
          download
          className="-my-[7px] flex items-center gap-[7px] rounded-full bg-foreground px-3.5 py-[7px] text-background transition-transform duration-[400ms] ease-spring hover:scale-[1.06]"
        >
          <Download size={14} />
          Resume
        </a>
      </nav>
    </header>
  );
};
