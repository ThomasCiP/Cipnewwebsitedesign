import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import StartHere from "./pages/StartHere";
import JoinParty from "./pages/JoinParty";
import Events from "./pages/Events";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "start-here", Component: StartHere },
      { path: "join", Component: JoinParty },
      { path: "events", Component: Events },
      { path: "partners", Component: Partners },
      { path: "resources", Component: Resources },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "donate", Component: Donate },
      { path: "*", Component: Home },
    ],
  },
]);
