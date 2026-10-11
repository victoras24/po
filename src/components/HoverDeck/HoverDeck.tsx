import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Projects, StackGroups } from "@/data/dataConfig";
import type { TechItem } from "@/data/dataConfig";
import { cn } from "@/lib/utils";

export type ActiveItem = number | "about" | "stack" | null;

// [x, y, rotate°] of each card relative to the deck anchor
type Offset = [number, number, number];

const PROJECT_OFFSETS: Offset[] = [
  [24, -160, -5],
  [300, -96, 3.5],
  [80, 96, -2],
];
const ABOUT_OFFSETS: Offset[] = [
  [0, -170, -3],
  [330, -130, 4],
  [60, 60, -2],
];
const STACK_OFFSETS: Offset[] = [
  [0, -210, -4],
  [300, -170, 3],
  [20, -20, 2],
  [300, 30, -2.5],
];

const SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const NARROW = 760;
const DECK_WIDTH = 620;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

type DeckCardProps = {
  offset: Offset;
  index: number;
  active: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const DeckCard = ({
  offset: [x, y, rotate],
  index,
  active,
  className,
  style,
  children,
}: DeckCardProps) => {
  const reduced = useReducedMotion();
  // Cards stagger in, but leave together
  const delay = active && !reduced ? index * 0.07 : 0;

  return (
    <motion.div
      initial={false}
      animate={
        active
          ? { x, y, rotate, scale: 1, opacity: 1 }
          : {
              x: x * 0.25,
              y: y * 0.25 + 70,
              rotate: -2 * rotate,
              scale: 0.55,
              opacity: 0,
            }
      }
      transition={{
        duration: reduced ? 0 : 0.75,
        ease: SPRING,
        delay,
        opacity: { duration: reduced ? 0 : 0.3, ease: EASE, delay },
      }}
      className={cn(
        "absolute left-0 top-0 rounded-3xl border border-border bg-card shadow-deck",
        className
      )}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const Chip = ({ item, large }: { item: TechItem; large?: boolean }) => (
  <span
    className={cn(
      "flex items-center gap-1.5 rounded-full border border-border font-mono",
      large
        ? "py-[5px] pl-[7px] pr-[11px] text-[12px]"
        : "py-1 pl-1.5 pr-2.5 text-[11px]"
    )}
  >
    <img
      src={item.icon}
      alt=""
      className={cn(
        large ? "size-[15px]" : "size-3.5",
        item.mono && "dark:invert"
      )}
    />
    {item.label}
  </span>
);

const tint = (hue: number) => `oklch(var(--tl) var(--tc) ${hue})`;

export const HoverDeck = ({ active }: { active: ActiveItem }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    let x = window.innerWidth * 0.55;
    let y = window.innerHeight * 0.5;
    let mouseX = x;
    let mouseY = y;
    let vx = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      const el = overlayRef.current;
      if (el) {
        const W = window.innerWidth;
        const H = window.innerHeight;
        const narrow = W < NARROW;
        const scale = narrow ? Math.min(1, (W - 24) / DECK_WIDTH) : 1;
        // Narrow screens pin the deck to the bottom-left instead of following
        const targetX = narrow ? 12 : clamp(mouseX + 28, 16, W - 640);
        const targetY = narrow ? H - 260 * scale : clamp(mouseY, 200, H - 250);
        const k = reduced ? 1 : 0.12;
        const nextX = x + (targetX - x) * k;
        vx += (nextX - x - vx) * 0.2;
        x = nextX;
        y += (targetY - y) * k;
        const tilt = clamp(vx * 0.25, -6, 6);
        el.style.transform = `translate3d(${x}px,${y}px,0) rotate(${tilt}deg) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduced]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-20 size-0 will-change-transform"
    >
      {Projects.map((project, i) => {
        const on = active === i;
        return (
          <div key={project.title} className="absolute left-0 top-0">
            <DeckCard
              offset={PROJECT_OFFSETS[0]}
              index={0}
              active={on}
              className="flex h-[210px] w-[300px] items-center justify-center"
              style={{ background: tint(project.hue) }}
            >
              {project.shot ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 size-full rounded-[23px] object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[52%] max-w-[62%] object-contain"
                />
              )}
              <span className="absolute left-[18px] top-4 font-mono text-[11px]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </DeckCard>
            <DeckCard
              offset={PROJECT_OFFSETS[1]}
              index={1}
              active={on}
              className="w-[290px] px-[22px] py-5"
            >
              <div className="mb-2 text-[20px] font-semibold leading-[1.15] tracking-[-0.02em]">
                {project.title}
              </div>
              <div className="text-pretty text-[14.5px] leading-normal text-muted-foreground">
                {project.content}
              </div>
            </DeckCard>
            <DeckCard
              offset={PROJECT_OFFSETS[2]}
              index={2}
              active={on}
              className="w-[300px] p-[18px]"
            >
              <div className="flex flex-wrap gap-1.5">
                {project.labels.map((label) => (
                  <Chip key={label.label} item={label} />
                ))}
              </div>
              <div className="mt-3.5 flex justify-between gap-3 border-t border-border pt-3 font-mono text-[11px]">
                <span className="text-muted-foreground">
                  {new URL(project.link).hostname.slice(0, 28)}
                </span>
                <span className="whitespace-nowrap">Click to open ↗</span>
              </div>
            </DeckCard>
          </div>
        );
      })}

      <div className="absolute left-0 top-0">
        <DeckCard
          offset={ABOUT_OFFSETS[0]}
          index={0}
          active={active === "about"}
          className="w-[360px] p-6"
        >
          <div className="mb-2.5 font-mono text-[11px] text-muted-foreground">
            Hi!
          </div>
          <div className="text-pretty text-[17px] leading-[1.45]">
            I'm a full stack developer who enjoys building things end to end —
            turning ideas into real products people use. Mostly React and
            TypeScript on the front, C# and .NET on the back. Always curious,
            always experimenting.
          </div>
        </DeckCard>
        <DeckCard
          offset={ABOUT_OFFSETS[1]}
          index={1}
          active={active === "about"}
          className="w-[250px] border-0 bg-foreground px-5 py-[18px] text-background"
        >
          <div className="mb-2 font-mono text-[11px] opacity-70">
            Currently, since Dec 2024
          </div>
          <div className="text-[18px] font-semibold leading-tight tracking-[-0.01em]">
            Full Stack Developer at Roobley
          </div>
        </DeckCard>
        <DeckCard
          offset={ABOUT_OFFSETS[2]}
          index={2}
          active={active === "about"}
          className="w-[220px] px-5 py-[18px]"
          style={{ background: tint(160) }}
        >
          <div className="mb-2 font-mono text-[11px] text-muted-foreground">
            Front + back
          </div>
          <div className="text-[18px] font-semibold tracking-[-0.01em]">
            React, TypeScript, C#, .NET
          </div>
        </DeckCard>
      </div>

      <div className="absolute left-0 top-0">
        {StackGroups.map((group, i) => (
          <DeckCard
            key={group.label}
            offset={STACK_OFFSETS[i]}
            index={i}
            active={active === "stack"}
            className="w-[290px] p-[18px]"
          >
            <div className="mb-3 font-mono text-[11px] text-muted-foreground">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Chip key={item.label} item={item} large />
              ))}
            </div>
          </DeckCard>
        ))}
      </div>
    </div>
  );
};
