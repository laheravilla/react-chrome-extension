import React from "react";
import { createRoot } from "react-dom/client";
import "./options.css";

const greet = <h1>Options</h1>;

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(greet);