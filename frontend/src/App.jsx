import "./App.css";
import Homepage from "./Pages/Homepage.jsx";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage.jsx";

function App() {
  return (
    <div className="page-background">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;

