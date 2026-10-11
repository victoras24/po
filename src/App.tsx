import { ThemeProvider } from "next-themes";
import { HomePage } from "./pages/HomePage";

export const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" storageKey="vi-portfolio-theme">
      <HomePage />
    </ThemeProvider>
  );
};
