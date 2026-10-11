import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/dataConfig";

const SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

type ProjectRowProps = {
  project: Project;
  index: number;
  // This row is the hovered one
  active: boolean;
  // Another row is the hovered one
  dimmed: boolean;
  // Seconds to hold back the load-in rise, 0 once the intro is over
  introDelay: number;
  onActivate: () => void;
  onDeactivate: () => void;
};

export const ProjectRow = ({
  project,
  index,
  active,
  dimmed,
  introDelay,
  onActivate,
  onDeactivate,
}: ProjectRowProps) => {
  const reduced = useReducedMotion();
  const delay = reduced ? 0 : introDelay;
  const opacity = dimmed ? 0.22 : 1;

  const handleClick = (e: React.MouseEvent) => {
    // On touch the first tap previews the project, the second one opens it
    if (window.matchMedia("(hover: none)").matches && !active) {
      e.preventDefault();
      onActivate();
    }
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => {
        if (!window.matchMedia("(hover: none)").matches) onActivate();
      }}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={handleClick}
      className="grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-4 overflow-hidden border-b border-border py-[clamp(6px,1.3vh,14px)]"
    >
      <span
        className="font-mono text-[12px] transition-colors duration-300"
        style={{
          color: active
            ? `oklch(0.62 0.16 ${project.hue})`
            : "var(--muted-foreground)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: 0, x: active ? 18 : 0, opacity }}
        transition={{
          duration: reduced ? 0 : 0.7,
          ease: SPRING,
          delay,
          opacity: { duration: reduced ? 0 : 0.5, ease: EASE, delay },
        }}
        className="block truncate text-[length:clamp(28px,6.4vh,76px)] font-medium leading-[1.02] tracking-[-0.035em]"
      >
        {project.title}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: reduced ? 0 : 0.4, ease: EASE }}
        className="whitespace-nowrap font-mono text-[12px] text-muted-foreground"
      >
        {project.category}
      </motion.span>
    </a>
  );
};
