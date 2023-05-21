import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// layout
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
        index: true,
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
