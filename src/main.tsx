// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/css/index.css";
import "../src/css/variables.css";
import "../src/css/mediaQueris.css";
import Root from "./routes/root";
// import Contact from "./routes/contact";
import { Profile } from "./routes/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement:  <ErrorPage/>, //todo
        children: [
            {
                path: "profiles/:profileId",
                element: <Profile />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
