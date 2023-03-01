import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import { DebugObserver } from "@/store/utils/DebugObserver";
import { initRecoilState } from "@/store/utils/initRecoilState";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot initializeState={initRecoilState}>
    <DebugObserver />
    <App />
  </RecoilRoot>
  // </React.StrictMode>
);
