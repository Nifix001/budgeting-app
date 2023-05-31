import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Toastify library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import Main, { mainLoader } from "./layouts/Main";

 // routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { expensesAction, expensesLoader} from "./pages/ExpensesPage";
import BudgetPage from "./pages/BudgetPage";

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
          action: dashboardAction,
          errorElement: <Error />
        },
        {
          path: "budget/:id",
          element: <BudgetPage />,
          // loader: expensesLoader,
          // action: expensesAction
        },
        {
          path: "expenses",
          element: <ExpensesPage />,
          loader: expensesLoader,
          action: expensesAction
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
      <ToastContainer />
    </div>
  )
}

export default App
