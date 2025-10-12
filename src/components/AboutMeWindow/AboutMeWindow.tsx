import { ModeToggle } from "../ui/mode-toggle";
import { Github, Linkedin, Mail } from "lucide-react";

export const AbouMeWindow = () => {
  return (
    <div className="relative hidden lg:block">
      <div className="border text-card-foreground border-border/40 from-background to-background/95 relative overflow-hidden rounded-2xl bg-gradient-to-b shadow-xl backdrop-blur">
        <div className="p-0">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-500"></div>
                <div className="size-3 rounded-full bg-yellow-500"></div>
                <div className="size-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Github
                className="hover: cursor-pointer"
                onClick={() => window.open("https://github.com/victoras24")}
              />
              <Mail
                className="hover: cursor-pointer"
                onClick={() => window.open("mailto:esaakidis@gmail.com")}
              />
              <Linkedin
                className="hover: cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/victoras-isaakidis-217b71227/"
                  )
                }
              />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
          <div className="space-y-6 p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="rounded-xl border bg-card text-card-foreground shadow w-full">
                  <div className="p-4">
                    <div className="flex text-start items-center gap-3">
                      <p className="text-md leading-relaxed md:text-md">
                        Hi! I'm a full stack developer who enjoys building
                        things from start to finish, both the frontend and the
                        backend. I like taking ideas and turning them into real,
                        working products that people can use. I mostly work with
                        React.js and TypeScript on the frontend and C# with .NET
                        on the backend. I’m always curious, learning and
                        experimenting with new ideas whether it’s for work or
                        just for fun.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#tech-stack"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 w-full shadow-sm transition-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                      />
                    </svg>
                    Tech stack
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full shadow-sm transition-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                    Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
