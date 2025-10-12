export const Intro = () => {
  return (
    <div className="mx-auto max-w-2xl text-left">
      <div>
        <div className="inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none">
          <span className="text-primary mr-1">✦</span> e-saakidis.dev
        </div>
      </div>
      <h1 className="from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
        Victoras Isaakidis{" "}
        <span className="font-serif font-light italic">
          Full Stack Software Developer
        </span>{" "}
      </h1>
    </div>
  );
};
