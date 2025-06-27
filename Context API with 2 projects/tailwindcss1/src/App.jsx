import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark"); // reset both
    html.classList.add(themeMode); // apply selected
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-sm">
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
