import { CommentClass } from './components/classcomponent';
import { Comment } from './components/components';
import './css/table.css'

function App() {
  let listaSoKomentari=[
    { id:453434, author: "Andrew Collins", text: "Good Morning"},
    { id:342344, author: "Bob Jackson", text: "Good Afternoon" },
    { id:193488, author: "Sam Hudson", text: "Good Evening" },
    { id:643233, author: "Kevin Clark", text: "Good Night" },
  ]

return (
  <div>
  <Comment comments = {listaSoKomentari}/>
  <hr></hr>
  <br></br>
  <br></br>
  <br></br>
  <p>.............. Here is the Class Component ! .............</p>
  <CommentClass comments = {listaSoKomentari}/>
  </div>
)
}
export default App;
