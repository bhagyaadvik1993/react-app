import React from 'react'

function SiblingA({text, setText}) {
  return (
    <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder='Input of SiblingA'
    />
  )
}

export default SiblingA