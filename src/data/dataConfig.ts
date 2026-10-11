import companySearchImage from "../assets/companysearch.svg";
import cynewstoday from "../assets/cynewstoday.svg";
import websockets from "../assets/websockets.svg";
import eleniSweetsImage from "../assets/elenisweets.svg";
import vanLifeImage from "../assets/vanlife.svg";
import quizzicalShot from "../assets/quizzical-shot.png";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const LOBE = "https://unpkg.com/@lobehub/icons-static-svg@1/icons/";

export type TechItem = {
	label: string;
	icon: string;
	// Single-colour icon that needs inverting in dark mode
	mono?: boolean;
};

export const tech = {
	html: { label: "HTML", icon: DEVICON + "html5/html5-original.svg" },
	css: { label: "CSS", icon: DEVICON + "css3/css3-original.svg" },
	react: {
		label: "React",
		icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	},
	ts: {
		label: "TypeScript",
		icon: DEVICON + "typescript/typescript-original.svg",
	},
	js: {
		label: "JavaScript",
		icon: DEVICON + "javascript/javascript-original.svg",
	},
	cs: { label: "C#", icon: DEVICON + "csharp/csharp-original.svg" },
	net: { label: ".NET", icon: DEVICON + "dot-net/dot-net-original.svg" },
	next: {
		label: "Next.js",
		icon: DEVICON + "nextjs/nextjs-original.svg",
		mono: true,
	},
	docker: { label: "Docker", icon: DEVICON + "docker/docker-original.svg" },
	github: {
		label: "GitHub",
		icon: DEVICON + "github/github-original.svg",
		mono: true,
	},
	postgres: {
		label: "PostgreSQL",
		icon: DEVICON + "postgresql/postgresql-original.svg",
	},
	firebase: { label: "Firebase", icon: DEVICON + "firebase/firebase-plain.svg" },
	azure: { label: "Azure", icon: DEVICON + "azure/azure-original.svg" },
	linux: { label: "Linux", icon: DEVICON + "linux/linux-original.svg" },
	vercel: {
		label: "Vercel",
		icon: DEVICON + "vercel/vercel-original.svg",
		mono: true,
	},
	supabase: {
		label: "Supabase",
		icon: DEVICON + "supabase/supabase-original.svg",
	},
	sql: {
		label: "SQL",
		icon: DEVICON + "azuresqldatabase/azuresqldatabase-original.svg",
	},
	c: { label: "C", icon: DEVICON + "c/c-original.svg" },
	node: { label: "Node.js", icon: DEVICON + "nodejs/nodejs-original.svg" },
	tailwind: {
		label: "Tailwind CSS",
		icon: DEVICON + "tailwindcss/tailwindcss-original.svg",
	},
	git: { label: "Git", icon: DEVICON + "git/git-original.svg" },
	postman: { label: "Postman", icon: DEVICON + "postman/postman-original.svg" },
	agentFramework: {
		label: "Microsoft Agent Framework",
		icon: LOBE + "microsoft-color.svg",
	},
	claudeCode: { label: "Claude Code", icon: LOBE + "claudecode-color.svg" },
	cursor: { label: "Cursor", icon: LOBE + "cursor.svg", mono: true },
	pi: { label: "Pi", icon: LOBE + "pi.svg", mono: true },
} satisfies Record<string, TechItem>;

export type Project = {
	image: string;
	// Image is a screenshot shown full-bleed rather than a centred logo
	shot?: boolean;
	title: string;
	category: string;
	// oklch hue used for the preview tint, index colour and page tint
	hue: number;
	content: string;
	link: string;
	labels: TechItem[];
};

export const Projects: Project[] = [
	{
		image: companySearchImage,
		title: "Company Search Cyprus",
		category: "Product, SaaS",
		hue: 160,
		content:
			"Search Cyprus company records. Create an account, save and organise companies, and stay current through regular blog posts.",
		link: "https://companysearchcyprus.com/",
		labels: [
			tech.react,
			tech.ts,
			tech.tailwind,
			tech.net,
			tech.postgres,
			tech.azure,
			tech.supabase,
			tech.firebase,
		],
	},
	{
		image: websockets,
		title: "WebSockets From Scratch",
		category: "Systems, C#",
		hue: 265,
		content:
			"A WebSocket server hand-built in C#/.NET, demoed as live product bidding. Open two tabs and watch bids sync in real time.",
		link: "https://gray-coast-0d6a1cc03.4.azurestaticapps.net/",
		labels: [tech.cs, tech.net, tech.html, tech.css, tech.js, tech.github],
	},
	{
		image: cynewstoday,
		title: "Cyprus News Today",
		category: "AI news",
		hue: 25,
		content:
			"An AI-driven news platform. Perplexity research gathers reliable sources, spots emerging topics and writes clear articles.",
		link: "https://newscy-nextjs.vercel.app/",
		labels: [
			tech.next,
			tech.react,
			tech.ts,
			tech.postgres,
			tech.vercel,
			tech.supabase,
		],
	},
	{
		image: eleniSweetsImage,
		title: "Eleni Sweets",
		category: "E-commerce",
		hue: 350,
		content:
			"A sweets shop where visitors browse treats and add favourites to a cart.",
		link: "https://legendary-caramel-526ade.netlify.app/",
		labels: [tech.react, tech.js, tech.html, tech.css, tech.firebase],
	},
	{
		image: vanLifeImage,
		title: "Van Life",
		category: "Rentals",
		hue: 70,
		content:
			"One of my early projects: browse rental vans and view pricing and features.",
		link: "https://main--magical-puffpuff-54104d.netlify.app/",
		labels: [tech.react, tech.js, tech.html, tech.css, tech.firebase],
	},
	{
		image: quizzicalShot,
		shot: true,
		title: "Quizzzzical",
		category: "Game",
		hue: 300,
		content:
			"A ten-question quiz — one of my first mini projects, where the fundamentals clicked.",
		link: "https://652a76cf02104c2077f0de03--zippy-torte-b48343.netlify.app/",
		labels: [tech.react, tech.js, tech.html, tech.css],
	},
];

export const StackGroups: { label: string; items: TechItem[] }[] = [
	{
		label: "Languages",
		items: [tech.ts, tech.js, tech.cs, tech.sql, tech.html, tech.css, tech.c],
	},
	{
		label: "Frameworks & libraries",
		items: [tech.react, tech.next, tech.net, tech.node, tech.tailwind],
	},
	{
		label: "AI & agentic development",
		items: [tech.agentFramework, tech.claudeCode, tech.cursor, tech.pi],
	},
	{
		label: "Cloud, DevOps & data",
		items: [
			tech.azure,
			tech.docker,
			tech.git,
			tech.github,
			tech.postman,
			tech.vercel,
			tech.linux,
			tech.postgres,
			tech.supabase,
			tech.firebase,
		],
	},
];
