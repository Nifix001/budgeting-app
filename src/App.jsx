import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./layouts/Main";

// routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
