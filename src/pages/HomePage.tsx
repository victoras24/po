import { row1Items, row2Items, row3Items } from "@/data/dataConfig";
import { MovingCarousel } from "@/components/MovingCarousel/MovingCarousel";
import { Project } from "@/components/Project/Project";
import { Projects } from "@/data/dataConfig";
import { AbouMeWindow } from "@/components/AboutMeWindow/AboutMeWindow";
import { Intro } from "@/components/Intro/Intro";
import { Title } from "@/components/Title/Title";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative isolate container mx-auto w-full py-20 md:py-32 lg:py-40"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 mb-8">
          <Intro />
          <AbouMeWindow />
        </div>
      </motion.section>
      <section id="tech-stack" className="w-full py-20 md:py-32">
        <Title
          header={"Tech Stack"}
          description={
            "These are the tools and technologies I use to build and maintain my projects."
          }
        />
        <div className="mb-8">
          <MovingCarousel items={row1Items} />
          <MovingCarousel items={row2Items} />
          <MovingCarousel items={row3Items} />
        </div>
      </section>
      <section id="projects" className="w-full py-20 md:py-32">
        <Title
          header={"Projects"}
          description={
            "Here are some of the projects I've worked on. Each one represents a step in my learning journey and showcases different skills, tools and problem-solving approaches I've developed along the way."
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project) => {
            return (
              <Project
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                content={project.content}
                link={project.link}
                labels={project.labels}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
