import { useEffect, useState } from "react";
import './App.css';
import Pref from "./Pref";
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import apiKey from './apiKey';

function App() {
  const [todos, setTodos] = useState([{
    selected: Array(47).fill(false),
    prefectures: {},
    series: []
  }
  //クラスを使うからバインドする必要はない
  // const _changeSelection = (x) => {
  //   setTodos.bind(x);
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

  const _changeSelection = (index) => {
    const selected_copy = todos.selected.slice();
    selected_copy[index] = !selected_copy[index];

    if(!todos.selected[index]) {
      // チェックされていなかった場合はデータを取得
      // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/population/sum/perYear.html
      fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/sum/perYear?cityCode=-&prefCode=${index +
          1}`,
        {
          headers: { 'X-API-KEY': apiKey }
        }
      )
        .then(response => response.json())
        .then(res => {
          let tmp = [];
          Object.keys(res.result.line.data).forEach(i => {
            tmp.push(res.result.line.data[i].value);
          });
          const res_series = {
            name: todos.prefectures[index].prefName,
            data: tmp
          };
          todos({
            selected: selected_copy,
            series: [...todos.series, res_series]
          });
        });
    } else {
      const series_copy = todos.series.slice();
      // チェック済みの場合はseriesから削除
      for (let i = 0; i < series_copy.length; i++) {
        if (series_copy[i].name === todos.prefectures[index].prefName) {
          series_copy.splice(i, 1);
        }
      }
      todos({
        selected: selected_copy,
        series: series_copy
      });
    }
   }

   useEffect((todos) => {
    _changeSelection(todos.prefCode - 1);
    }, []);

  return (
    <div>Hello world
      <Pref todos={todos} getData={getData} _changeSelection={_changeSelection}/>
    </div>
  );
};
export default App;