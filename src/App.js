import { useState } from "react";
import './App.css';
import Pref from "./Pref";
import apiKey from './apiKey';

function App() {
  const [todos, setTodos] = useState([{}]);
  console.log("1");
  const getData = () => {
    // 47都道府県の一覧を取得
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': apiKey }
    })
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < data.result.length; i++){
        console.log(data.result[i]);
        let name = data.result[i].prefName;
        let code = data.result[i].prefCode;
        setTodos((prevTodos) => {
          return [...prevTodos, {code: code, name: name}]
        })
    }});
  }
  console.log("2");

  return (
    <div>Hello world
      <Pref todos={todos} getData={getData}/>
    </div>
  );
};
export default App;