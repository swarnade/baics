import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar";
import Text from "./components/Text"
import Btn from "./components/btn"
import TextForm from "./components/TextForm";
import TextForm_2 from "./components/TextForm_2";
import TextForm_3 from "./components/TextForm_3";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {Routes,Route,Link}from "react-router-dom"


let abc = 123456;
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Has Been Activated", "warning")
      document.title = "Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Has Been Activated", "danger");
      document.title = "Light Mode";
    }
  };
  console.log(alert);
  return (
    <>
    <li><Link to="/element1">Hello</Link></li>
    <li><Link to="/textform3">Text</Link></li>
<Routes>
  <Route path="/element1" element={<About />}/>
  <Route path="/textform3" element={<TextForm_3></TextForm_3>}>Path 2</Route>
  </Routes>
    </>
  );
}
export default App;
