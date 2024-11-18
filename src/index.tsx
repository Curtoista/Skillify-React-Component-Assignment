import * as React from "react";
import { render as renderReact } from "react-dom";
import { html, render as renderLit } from "lit-html";
import { App } from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");

renderLit(
  html`
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      />
      <div id="reactRoot"></div>
    </div>
  `,
  rootElement
);

const reactRoot = document.getElementById("reactRoot");
renderReact(<App />, reactRoot);
