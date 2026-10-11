import { useEffect, useState } from "react";
import { Projects } from "@/data/dataConfig";
import { HoverDeck } from "@/components/HoverDeck/HoverDeck";
import type { ActiveItem } from "@/components/HoverDeck/HoverDeck";
import { ProjectRow } from "@/components/ProjectRow/ProjectRow";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

const pad = (n: number) => String(n).padStart(2, "0");

export const HomePage = () => {
	const [active, setActive] = useState<ActiveItem>(null);
	// The staggered rise only applies to the first second after load
	const [introDone, setIntroDone] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIntroDone(true), 1000);
		return () => clearTimeout(timeout);
	}, []);

	const activeProject = typeof active === "number" ? Projects[active] : null;

	return (
		<div
			className="relative grid h-screen min-h-[620px] grid-rows-[auto_1fr_auto] overflow-hidden leading-[normal] transition-[background] duration-[600ms] ease-[ease]"
			style={{
				background: activeProject
					? `color-mix(in oklch, var(--background) 90%, oklch(0.7 0.15 ${activeProject.hue}))`
					: "var(--background)",
			}}
		>
			<SiteHeader />

			<main className="relative flex min-h-0 flex-col justify-center px-[clamp(20px,4vw,56px)]">
				<div
					aria-hidden
					className="pointer-events-none absolute -bottom-[4vh] right-[clamp(20px,4vw,56px)] select-none text-[length:min(34vh,26vw)] font-bold leading-none tracking-[-0.06em] text-transparent transition-opacity duration-[400ms] ease-[ease] [-webkit-text-stroke:1.5px_var(--border)]"
					style={{ opacity: activeProject ? 1 : 0 }}
				>
					{typeof active === "number" ? pad(active + 1) : ""}
				</div>
				<div className="flex flex-wrap justify-between gap-4 border-b border-border pb-3.5 font-mono text-[12px] text-muted-foreground">
					<span>Selected work — {pad(Projects.length)}</span>
					<span>Hover to preview, click to open</span>
				</div>
				<div
					className="relative flex flex-col"
					onMouseLeave={() => setActive(null)}
				>
					{Projects.map((project, i) => (
						<ProjectRow
							key={project.title}
							project={project}
							index={i}
							active={active === i}
							dimmed={active !== null && active !== i}
							introDelay={!introDone && active === null ? i * 0.07 : 0}
							onActivate={() => setActive(i)}
							onDeactivate={() => setActive(null)}
						/>
					))}
				</div>
			</main>

			<SiteFooter active={active} onActiveChange={setActive} />

			<HoverDeck active={active} />
		</div>
	);
};
