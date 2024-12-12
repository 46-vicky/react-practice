import { useEffect, useState } from 'react'

const useFetch = (url,method = "GET") => {

   const [data,setData] = useState([]);
   const [error,setError] = useState(null);
   const [loading,setLoading] = useState(true);
   const [options,setOptions] = useState(null)

    const optionData = (data)=>{
        if(method === "POST"){
            setOptions({
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }else if(method === "PATCH"){
            setOptions({
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            });  
        }
    }

   useEffect(()=>{
        const fetchData = async (options)=>{
            try{
                const response = await fetch(url,{...options});
                const resData = await response.json();

                if(!response.ok){
                    throw new Error("'Failed to fetch data'");
                }

                setData(resData);
                setError("");

            }catch(err){
                setError(err.message);
                setData([]);
            }finally{
                setLoading(false)
            }
        }
        if(method === "GET"){
            fetchData()
        }else if((method === "POST" || method === "PATCH") && options){
            fetchData(options)
        }


   },[url,method,options]);
    
   return {data,error,loading,optionData};
 
}

export default useFetch;