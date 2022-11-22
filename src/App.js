import { useState } from "react";
import './App.css';
import Pref from "./Pref";
import apiKey from './apiKey';

function App() {
  // 都道府県名を配列に格納
  let prefectures = Array(47);
  // const [hok, setHok] = useState([]);
  const [prefs, setPrefectures] = useState([]);
  const [pref_names, setPrefName] = useState([]);

  //都道府県一覧を取得
  const prefslist = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  // const API_KEY = '0gArrR4dvc5FpBQOdngB2yBhpFJxLlk9jy0ZDK1r'
  // console.log(prefslist);
  
  fetch(prefslist, { headers: { 'X-API-KEY': apiKey } })
    .then((res) => {
      return res.json();
    })
    .then(data => {
      // console.log(data)
      // console.log(data.result)
      // console.log(data.result[0].prefName)
      // hokkaido = data.result[0].prefName;
      // setHok(hokkaido);
      for(let i = 0; i < data.result.length; i++){
        prefectures[i] = data.result[i].prefName;
        // console.log(prefectures[i]);
      }
      // console.log(prefectures);
      // set関数
      setPrefectures(prefectures);
      let pref_names = [];
      prefectures.forEach(i => {
        // console.log(i);
        pref_names.push(i);
      });
      setPrefName(pref_names);
    })
  return (
    <div className="App">
      <Pref prefs={prefs} pref_names={pref_names}/>
    </div>
  );
}

export default App;