import React from 'react'

const Pref = ({prefs, pref_names}) => {
  console.log(pref_names)
  return (
    <div>
      {pref_names.map((i) => (
      <label>
        <input type="checkbox" />{i}
      </label>
      ))}
    </div>
  )
}

export default Pref