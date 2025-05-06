import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import ExploreMore from "./components/ExploreMore.jsx";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Home from './components/Home.jsx'
import Login from "./components/Login.jsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import appStore from "./utils/appStore.jsx";
import AiSearchBar from "./components/AiSearchBar.jsx";
import AiLayout from './components/AiLayout.jsx'
import ExploreLayout from "./components/ExploreLayout.jsx";
import Notes from "./components/Notes.jsx";


// Layout Component for shared routes

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "exploremore",
        element: <ExploreMore/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "notes",
        element: <Notes/>,
      },
      {
        path: "aisearchbar",
        element: <AiSearchBar />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/exploreData",
    element: <ExploreLayout/>
  },
  {
    path: "/searchResponse",
    element: <AiLayout/>
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
