// rrd imports
import { useLoaderData } from "react-router-dom"
import Intro from "../components/Intro";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <div>
    {userName ?(<p>{userName}</p>) : <Intro />}
    </div>
  )
}

export default Dashboard