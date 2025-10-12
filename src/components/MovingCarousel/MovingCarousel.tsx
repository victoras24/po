import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface SkillItem {
  id: number;
  label: string;
  color: string;
  icon: any;
}

interface MovingCarouselProps {
  items: SkillItem[];
}

export const MovingCarousel: React.FC<MovingCarouselProps> = ({ items }) => {
  const [position, setPosition] = useState(-100);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + 0.5;
        const resetPoint = items.length * 100;
        return newPos >= resetPoint ? 0 : newPos;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="moving-carousel relative w-full h-15 overflow-hidden pt-4"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="moving-carousel__container flex gap-4"
        style={{ transform: `translateX(-${position}px)` }}
      >
        {duplicatedItems.map((item, index) => {
          return (
            <Button
              variant="carousel"
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`${item.color} whitespace-nowrap px-6 py-3 transition-transform hover:translate-y-[-3px] hover:scale-105 relative z-10 focus-visible:ring-1 focus-visible:ring-ring hover:shadow-lg`}
              style={{
                color: "#333333",
              }}
            >
              <img
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              {item.label}
            </Button>
          );
        })}
      </div>
    </motion.div>
  );
};
