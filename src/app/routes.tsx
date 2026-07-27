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
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

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
      { path: "support", Component: Support },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      // Unknown paths render a real not-found page. This used to render Home,
      // which meant every mistyped URL returned 200 with the homepage on it —
      // invisible to users following a bad link, and duplicate content to Google.
      { path: "*", Component: NotFound },
    ],
  },
]);
