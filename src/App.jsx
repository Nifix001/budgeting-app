import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />
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
