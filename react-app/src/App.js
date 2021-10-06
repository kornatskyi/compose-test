import logo from "./logo.svg";
import { useEffect, useState } from 'react'
import "./App.css";
import axios from "axios";

function App() {

  const [data, setData] = useState('')

  //some comments 
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL || 'http://localhost:3001').then(res => {
      setData(res.data)

    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log("helloflskdahf");
    axios.get((process.env.REACT_APP_API_URL || 'http://localhost:3001') + "/users").then(res => {
      setData(res.data)

    }).catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      <h1>Hello React</h1>

      <p>{data}</p>

    </div>
  );
}

export default App;
