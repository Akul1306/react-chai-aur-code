import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>hiiiiii</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };
const anotherElement = (
  <a href="google.com" target="_blank">
    Visit google
  </a>
);
const anotherUser = "Akul"
const ReactElement = React.createElement("a", {
  href: "google.com",
  target: "_blank"},
  'click me to visit google ',
  anotherUser
);
createRoot(document.getElementById("root")).render(ReactElement
);
