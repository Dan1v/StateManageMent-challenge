import React from "react";
import { MainLayout } from "./layout";
import { useThemeStore } from "./stores/useThemeStore";

function App() {
  const { theme } = useThemeStore();

  React.useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "";
  }, [theme]);
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
