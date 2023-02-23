import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const img = <img src="src/icons/icon48.png" />;

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(img);