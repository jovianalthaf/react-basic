import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Panel from "./Panel";
import Accordition from "./Accordition";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Accordition/>
    </StrictMode>
)