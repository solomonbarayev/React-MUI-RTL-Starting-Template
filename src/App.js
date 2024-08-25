import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <RouterProvider router={router}>
          <div className="App"></div>
        </RouterProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
