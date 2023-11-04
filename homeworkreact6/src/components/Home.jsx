import { Link } from "react-router-dom"


export const Home = () => {

return(
    <>
    <h1>Welcome to our homepage for Api Users</h1>
    <h2>Click Here to see the<Link to = "/users"> Users</Link></h2> 
    </>
)
}
