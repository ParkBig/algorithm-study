import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import FourStar from "./pages/FourStar";
import Main from "./pages/Main";
import OneStar from "./pages/OneStar";
import ThreeStart from "./pages/ThreeStart";
import TwoStar from "./pages/TwoStar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "1star",
        element: <OneStar />
      },
      {
        path: "2star",
        element: <TwoStar />,
      },
      {
        path: "3star",
        element: <ThreeStart />,
      },
      {
        path: "4star",
        element: <FourStar />,
      },
    ]
  }
]);

export default router;
