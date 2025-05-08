import React, { useState } from 'react'
import SiblingA  from './SiblingA';
import SiblingB  from './SiblingB';

function Parent() {
    const[text, setText] = useState();
  return (
    <div>
        <SiblingA text={text} setText={setText} />
        <SiblingB text={text} setText={setText} />

    </div>
  )
}

export default Parent