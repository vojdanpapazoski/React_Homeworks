import "./css/style.css";
import { ThreeHobbies } from "./components/3Hobinja";
import { Playing } from "./components/omilenohobi";
import { Hobby } from "./components/hobi";


function App() {

return (
<div>

    <li>Welcome to my first React JS exercises</li>
    <ThreeHobbies/>
<hr/>
    <li>Probably my favourite hobby</li>
    <Playing/>
<hr/>
    <h3 className="naslov">This one...</h3>
    <Hobby/>
   



</div>)}
export default App;