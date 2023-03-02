import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { DebugObserver } from "@/store/utils/DebugObserver";
import { initRecoilState } from "@/store/utils/initRecoilState";

import { defaultTheme } from "@/styles/theme/default";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot initializeState={initRecoilState}>
      <DebugObserver />
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
