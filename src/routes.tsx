import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { ProcessPage } from "./pages/ProcessPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "case-studies", Component: CaseStudiesPage },
      { path: "process", Component: ProcessPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
