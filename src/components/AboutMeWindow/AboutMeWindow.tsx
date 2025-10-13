import { ModeToggle } from "../ui/mode-toggle";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Folder,
  Settings,
} from "lucide-react";

export const AbouMeWindow = () => {
  return (
    <>
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
                          backend. I like taking ideas and turning them into
                          real, working products that people can use. I mostly
                          work with React.js and TypeScript on the frontend and
                          C# with .NET on the backend. I'm always curious,
                          learning and experimenting with new ideas whether it's
                          for work or just for fun.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#tech-stack"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full shadow-sm transition-none"
                    >
                      <Settings />
                      Tech stack
                    </a>
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full shadow-sm transition-none"
                    >
                      <Folder />
                      Projects
                    </a>
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 w-full shadow-sm transition-none"
                    >
                      <Download />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Hidden on desktop */}
      <div className="block lg:hidden space-y-6">
        <div className="rounded-xl border bg-card text-card-foreground shadow-lg p-6">
          <p className="text-base leading-relaxed">
            Hi! I'm a full stack developer who enjoys building things from start
            to finish, both the frontend and the backend. I like taking ideas
            and turning them into real, working products that people can use. I
            mostly work with React.js and TypeScript on the frontend and C# with
            .NET on the backend. I'm always curious, learning and experimenting
            with new ideas whether it's for work or just for fun.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="#tech-stack"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full shadow-sm"
          >
            <Settings />
            Tech stack
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full shadow-sm"
          >
            <Folder />
            Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full shadow-sm"
          >
            <Download />
            Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-2">
          <Github
            className="h-5 w-5 cursor-pointer hover:text-primary transition-colors"
            onClick={() => window.open("https://github.com/victoras24")}
          />
          <Mail
            className="h-5 w-5 cursor-pointer hover:text-primary transition-colors"
            onClick={() => window.open("mailto:esaakidis@gmail.com")}
          />
          <Linkedin
            className="h-5 w-5 cursor-pointer hover:text-primary transition-colors"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/victoras-isaakidis-217b71227/"
              )
            }
          />
        </div>
      </div>
    </>
  );
};
