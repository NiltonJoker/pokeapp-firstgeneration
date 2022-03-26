import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { initialState, ThemeContext } from "../context/themeContext";
import { lightTheme } from "../themes/ligthTheme";
import { darkTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(initialState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const themeState = window.localStorage.getItem("theme")
        ? window.localStorage.getItem("theme") === "true"
          ? true
          : false
        : true;

      setDark(themeState);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", dark.toString());
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <NextUIProvider theme={dark ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
