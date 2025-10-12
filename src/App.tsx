import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ThemeProvider } from "./components/ui/theme-provider";

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <HomePage />
    </ThemeProvider>
  );
};
