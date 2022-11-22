import React from 'react'
// import apiKey from './apiKey';

const Pref = ({todos, getData, _changeSelection}) => {
  const obj = todos.prefectures;
  // console.log(obj);

  return (
    <div
      key={todos.prefCode}
      style={{ margin: '5px', display: 'inline-block' }}
    >
      <input
        type="checkbox"
        checked={todos.selected[todos.prefCode - 1]}
        onChange={() => _changeSelection(todos.prefCode - 1)}
      />
      {todos.prefName}
    </div>
  )
}

export default Pref
