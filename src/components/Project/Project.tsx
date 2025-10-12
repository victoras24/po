import { motion } from "framer-motion";
import type { SkillItem } from "../MovingCarousel/MovingCarousel";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ProjectProps {
  id: number;
  image: string;
  title: string;
  content: string;
  link: string;
  labels: SkillItem[];
}

export const Project: React.FC<ProjectProps> = ({
  image,
  title,
  content,
  link,
  labels,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <Card
        onClick={() => window.open(link, "_blank")}
        className="flex flex-col h-full text-start px-6 py-4 transition-transform hover:translate-y-[-5px] hover:cursor-pointer"
      >
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Avatar style={{ backgroundColor: "white", padding: "2px" }}>
              <AvatarImage src={image} />
              <AvatarFallback>{title[0]}</AvatarFallback>
            </Avatar>
            <h3 className="flex items-center text-xl font-bold">{title}</h3>
          </div>
          <p className="text-muted-foreground text-pretty mb-4 flex-1">
            {content}
          </p>
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] mt-auto">
            {labels.map((label, index) => {
              return (
                <Label
                  key={index}
                  className={`${label.color} inline-flex rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground`}
                  style={{
                    color: "#333333",
                  }}
                >
                  <img
                    src={label.icon}
                    alt={label.label}
                    width={20}
                    height={20}
                    className="inline-block mr-2"
                  />
                  {label.label}
                </Label>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
