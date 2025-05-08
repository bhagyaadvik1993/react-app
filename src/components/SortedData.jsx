import React, { useMemo } from 'react'

function SortedData({data}) {

    const memoSortedData = useMemo(() => {
        console.log('Sorted data');
        return data.sort((a,b)=> a-b );
    },[data]);
  return (
    <div>
        <ul>
            {memoSortedData.map((item)=> (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default SortedData