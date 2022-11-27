import { useState } from "react";
import './App.css';
import Pref from "./Pref";
import apiKey from './apiKey';

function App() {
  const pref_sample = {
    "message": null,
    "result": [{
        "prefCode": 1,
        "prefName": "北海道"
    }, {
        "prefCode": 2,
        "prefName": "青森県"
    }, {
        "prefCode": 3,
        "prefName": "岩手県"
    }, {
        "prefCode": 4,
        "prefName": "宮城県"
    }, {
        "prefCode": 5,
        "prefName": "秋田県"
    }, {
        "prefCode": 6,
        "prefName": "山形県"
    }, {
        "prefCode": 7,
        "prefName": "福島県"
    }, {
        "prefCode": 8,
        "prefName": "茨城県"
    }, {
        "prefCode": 9,
        "prefName": "栃木県"
    }, {
        "prefCode": 10,
        "prefName": "群馬県"
    }, {
        "prefCode": 11,
        "prefName": "埼玉県"
    }, {
        "prefCode": 12,
        "prefName": "千葉県"
    }, {
        "prefCode": 13,
        "prefName": "東京都"
    }, {
        "prefCode": 14,
        "prefName": "神奈川県"
    }, {
        "prefCode": 15,
        "prefName": "新潟県"
    }, {
        "prefCode": 16,
        "prefName": "富山県"
    }, {
        "prefCode": 17,
        "prefName": "石川県"
    }, {
        "prefCode": 18,
        "prefName": "福井県"
    }, {
        "prefCode": 19,
        "prefName": "山梨県"
    }, {
        "prefCode": 20,
        "prefName": "長野県"
    }, {
        "prefCode": 21,
        "prefName": "岐阜県"
    }, {
        "prefCode": 22,
        "prefName": "静岡県"
    }, {
        "prefCode": 23,
        "prefName": "愛知県"
    }, {
        "prefCode": 24,
        "prefName": "三重県"
    }, {
        "prefCode": 25,
        "prefName": "滋賀県"
    }, {
        "prefCode": 26,
        "prefName": "京都府"
    }, {
        "prefCode": 27,
        "prefName": "大阪府"
    }, {
        "prefCode": 28,
        "prefName": "兵庫県"
    }, {
        "prefCode": 29,
        "prefName": "奈良県"
    }, {
        "prefCode": 30,
        "prefName": "和歌山県"
    }, {
        "prefCode": 31,
        "prefName": "鳥取県"
    }, {
        "prefCode": 32,
        "prefName": "島根県"
    }, {
        "prefCode": 33,
        "prefName": "岡山県"
    }, {
        "prefCode": 34,
        "prefName": "広島県"
    }, {
        "prefCode": 35,
        "prefName": "山口県"
    }, {
        "prefCode": 36,
        "prefName": "徳島県"
    }, {
        "prefCode": 37,
        "prefName": "香川県"
    }, {
        "prefCode": 38,
        "prefName": "愛媛県"
    }, {
        "prefCode": 39,
        "prefName": "高知県"
    }, {
        "prefCode": 40,
        "prefName": "福岡県"
    }, {
        "prefCode": 41,
        "prefName": "佐賀県"
    }, {
        "prefCode": 42,
        "prefName": "長崎県"
    }, {
        "prefCode": 43,
        "prefName": "熊本県"
    }, {
        "prefCode": 44,
        "prefName": "大分県"
    }, {
        "prefCode": 45,
        "prefName": "宮崎県"
    }, {
        "prefCode": 46,
        "prefName": "鹿児島県"
    }, {
        "prefCode": 47,
        "prefName": "沖縄県"
    }]
}

console.log(pref_sample);
console.log(pref_sample.result);
console.log(typeof(pref_sample.result)); //object
console.log(Array.isArray(pref_sample.result))//配列だということがわかった
const pref_arr = pref_sample.result.slice();
console.log(pref_arr);

console.log(pref_sample.result[0]);
console.log(pref_sample.result[0].prefName);

//配列のコピー方法
let array1 = [1, 2];
let array2 = [];
array2 = array1;
console.log(array2);

//resultがobjectなのでobjectにコピーする
let pref_copy = [];
pref_copy = pref_sample.result;
console.log(pref_copy);
//pref_copyにコピーできた
//letで宣言しているから?


  const [todos, setTodos] = useState([{
    selected: Array(47).fill(false),
    prefectures: [],
    series: []
  }
  // const _changeSelection = (x) => {
  //   _chageSelection.bind(x);
  // }
]);
// setTodos((prevTodos) => {
//   return [...prevTodos, {prefectures: pref_sample.result}];
// })
// setTodos([prefectures: pref_sample.result]); 
function addUser(pref_sample) {
  for(let i = 0; i < pref_sample.result.length; i++){
    setTodos([...todos, { prefectures: pref_sample.result[i] }]);
  }
}
addUser(pref_sample);
console.log("ここ");
console.log(todos.prefectures);
console.log(todos.prefectures[0].prefName);


  let box = [{}];

  // 47都道府県の一覧を取得
  // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
  const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

  // fetch(url, {
  //   headers: { 'X-API-KEY': apiKey }
  // })
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   for(let i = 0; i < data.result.length; i++){
  //     box.push(data.result[i])
  //     setTodos([...todos, data.result[i]])
  //   }
  // });
  // console.log(box);
  // console.log(todos);
  // console.log(todos[0].prefectures);
  // console.log("1");

  // const getData = () => {
  //   // 47都道府県の一覧を取得
  //   // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
  //   fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
  //     headers: { 'X-API-KEY': apiKey }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setTodos({ prefectures: data.result })}
  //   );
  // }

  return (
    <div>Hello world
      {/* <Pref todos={todos} getData={getData}/> */}
      {/* <Pref todos={todos}/> */}
    </div>
  );
};
export default App;