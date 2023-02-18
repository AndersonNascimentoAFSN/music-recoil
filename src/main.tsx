import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import { DebugObserver } from "@/components/DebugObserver";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <RecoilRoot>
      <DebugObserver />
      <App />
    </RecoilRoot>
  // </React.StrictMode>
);
