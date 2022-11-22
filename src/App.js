import { useState } from "react";
import './App.css';
import Pref from "./Pref";
import apiKey from './apiKey';

function App() {
  const [todos, setTodos] = useState([{
    selected: Array(47).fill(false),
    prefectures: {},
    series: []
  }
  // const _changeSelection = (x) => {
  //   _chageSelection.bind(x);
  // }
]);

  console.log("1");
  const getData = () => {
    // 47都道府県の一覧を取得
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': apiKey }
    })
    .then(response => response.json())
    .then(data => {
      setTodos({ prefectures: data.result })}
    );
  }
  console.log(todos.prefectures);

  return (
    <div>Hello world
      <Pref todos={todos} getData={getData}/>
    </div>
  );
};
export default App;