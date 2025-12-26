import companySearchImage from "../assets/fullGroup.svg";
import quizicalImage from "../assets/quizical.svg";
import vanLifeImage from "../assets/vanlife.svg";
import eleniSweetsImage from "../assets/elenisweets.svg";
import cynewstoday from "../assets/cynewstoday.svg";
import websocketfromscratch from "../assets/websocketfromscratch.svg";

export const row1Items = [
	{
		id: 1,
		label: "HTML",
		color: "bg-rose-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
	},
	{
		id: 2,
		label: "CSS",
		color: "bg-sky-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
	},
	{
		id: 3,
		label: "React",
		color: "bg-cyan-100",
		icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	},
	{
		id: 4,
		label: "TypeScript",
		color: "bg-blue-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	},
	{
		id: 5,
		label: "JavaScript",
		color: "bg-yellow-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
];

export const row2Items = [
	{
		id: 1,
		label: "C#",
		color: "bg-violet-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
	},
	{
		id: 2,
		label: ".NET",
		color: "bg-purple-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
	},
	{
		id: 3,
		label: "Next.js",
		color: "bg-lime-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
	},
	{
		id: 4,
		label: "Docker",
		color: "bg-teal-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
	},
	{
		id: 5,
		label: "GitHub",
		color: "bg-neutral-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
	},
];

export const row3Items = [
	{
		id: 1,
		label: "PostgreSQL",
		color: "bg-blue-200",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
	},
	{
		id: 2,
		label: "Firebase",
		color: "bg-amber-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
	},
	{
		id: 3,
		label: "Azure",
		color: "bg-blue-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
	},
	{
		id: 4,
		label: "Linux",
		color: "bg-green-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
	},
	{
		id: 5,
		label: "Security",
		color: "bg-pink-100",
		icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
	},
	{
		id: 6,
		label: "Testing",
		color: "bg-lime-100",
		icon: "https://cdn-icons-png.flaticon.com/512/3306/3306961.png",
	},
	{
		id: 7,
		label: "Vercel",
		color: "bg-neutral-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
	},
	{
		id: 8,
		label: "Supabase",
		color: "bg-emerald-100",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
	},
];

export const Projects = [
	{
		image: companySearchImage,
		title: "Company Search Cyprus",
		content:
			"Web application that allows users to search for company information in Cyprus. Users can create an account, save and organize companies they’re interested in and stay informed through regularly updated blog posts.",
		link: "https://companysearchcyprus.com/",
		labels: [
			row1Items[0],
			row1Items[1],
			row1Items[2],
			row1Items[3],
			row1Items[4],
			row2Items[1],
			row2Items[4],
			row3Items[0],
			row3Items[1],
			row3Items[2],
			row3Items[7],
		],
	},
	{
		image: cynewstoday,
		title: "Cyprus News Today",
		content:
			"This project is an AI-driven news platform that generates articles using Perplexity’s research-focused AI. It automatically gathers information from reliable sources, analyzes emerging topics and produces clear, engaging news articles.",
		link: "https://newscy-nextjs.vercel.app/",
		labels: [
			row1Items[0],
			row1Items[1],
			row1Items[2],
			row1Items[3],
			row1Items[4],
			row2Items[2],
			row2Items[4],
			row3Items[0],
			row3Items[6],
			row3Items[7],
		],
	},
	{
		image: websocketfromscratch,
		title: "Websockets From Scratch With C#",
		content:
			"This project demonstrates a WebSocket connection built from scratch using C# (.NET) with a simple frontend that simulates real-time product bidding. Opening the app in multiple tabs shows live bid updates across all connections, and WebSocket traffic can be inspected in the browser’s DevTools (Network → WS). The README further explains and analyzes each step of the implementation.",
		link: "https://gray-coast-0d6a1cc03.4.azurestaticapps.net/",
		labels: [
			row2Items[0],
			row2Items[1],
			row1Items[0],
			row1Items[1],
			row1Items[4],
			row2Items[4],
		],
	},
	{
		image: eleniSweetsImage,
		title: "Eleni Sweets",
		content:
			"Created a sweets shop website where users can browse different types of sweets and add their favorites to a shopping cart.",
		link: "https://legendary-caramel-526ade.netlify.app/",
		labels: [
			row1Items[0],
			row1Items[1],
			row1Items[2],
			row1Items[4],
			row3Items[1],
		],
	},
	{
		image: vanLifeImage,
		title: "Van Life",
		content:
			"A website for renting vans as one of my early web development projects. The site allows users to browse available vans, view details like pricing and features",
		link: "https://main--magical-puffpuff-54104d.netlify.app/",
		labels: [
			row1Items[0],
			row1Items[1],
			row1Items[2],
			row1Items[4],
			row3Items[1],
		],
	},
	{
		image: quizicalImage,
		title: "Quizzzzical",
		content:
			"A quiz game with 10 different questions was one of my first mini projects. It helped me get comfortable with basic programming concepts",
		link: "https://652a76cf02104c2077f0de03--zippy-torte-b48343.netlify.app/",
		labels: [row1Items[0], row1Items[1], row1Items[2], row1Items[4]],
	},
];
