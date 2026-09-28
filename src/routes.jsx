import { createBrowserRouter } from "react-router";
import IscaLayout from "./components/iscaLayout";
import Home from "./pages/Home/home";
import Doc from "./pages/doc/doc";
import Encyclopedia from "./pages/encyclopedia/encyclopedia";
import Index from "./pages/index/index";
import Term from "./pages/term/term";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IscaLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "doc", element: <Doc /> },
      { path: "encyclopedia", element: <Encyclopedia /> },
      { path: "index", element: <Index /> },
      { path: "term", element: <Term /> },
    ],
  },
]);

export default router;   