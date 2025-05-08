import React, { useState } from 'react'

function FetchDataAsync(url) {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        const FetchData = async () =>{
            try{
                const datafetch = await fetch(url);
                if(!datafetch.ok){
                    setError('unhanled exception');
                }
                const result = await datafetch.json();
                setData(result);
            }catch(error){
                setError(error);

            }finally{
                setLoading(false);
            }
           
        }
        FetchData();
    },[url]);

  return { data, error, loading }
}

export default FetchDataAsync