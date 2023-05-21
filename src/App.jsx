import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Layouts
import Main, { mainLoader } from "./layouts/Main";

 // routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error"

// Actions
import { logoutAction } from "./actions/logout";

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
        { 
          path: "logout",
          action: logoutAction
        }
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
