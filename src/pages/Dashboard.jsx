// rrd imports
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
// components
import Intro from "../components/Intro";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function dashboardLoader(){
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");  
  return { userName,budgets }
}

// action
export async function dashboardAction({request}){
  const data = await request.formData();
  const formData = Object.fromEntries(data)
  try {
  localStorage.setItem("userName", JSON.stringify(formData.userName))
  return toast.success(`Welcome, ${formData.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating your account.")
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData()

  return (
    <div>
    {userName ?(
      <div className="dashboard">
        <h1>Welcome back, <span className="accent">{userName}</span></h1>
        <div className="grid-sm">
          {}
          <div className="grid-lg">
            
          </div>
        </div>
      </div>
    ) : <Intro />}
    </div>
  )
}

export default Dashboard