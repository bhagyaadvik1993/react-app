import React from 'react'

function SiblingB({text, setText}) {
  return (
    <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder='Input of SiblingB'
    />
  )
}

export default SiblingB