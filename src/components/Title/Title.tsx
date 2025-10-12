export const Title: React.FC<{
  header: string;
  description: string;
}> = ({ header, description }) => {
  return (
    <div
      className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="mb-4 flex items-center justify-center gap-4">
        <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
          <span className="text-primary">✦</span>
        </div>
      </div>
      <h2 className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
        {header}
      </h2>
      <p className="text-muted-foreground max-w-[800px] md:text-lg">
        {description}
      </p>
    </div>
  );
};
