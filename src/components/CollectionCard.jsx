import React, { useState,useContext,useEffect } from 'react'
import { AppContext } from "../context/appContext";
import { SingleCard } from './SingleCard'

export const CollectionCard = () => { 
    const { rawdata,loading } = useContext(AppContext);
    const [data,setData] = useState([]); 
    const [buttonSelect, setButtonSelect] = useState(0); 
    function handleType(type) {
        if (type === 0) {
            setData(rawdata);
            setButtonSelect(0);
        } else {
            setData(rawdata.filter(item => item.available === true)); 
            setButtonSelect(1);
        }
    }
    useEffect(()=>{
        setData(rawdata);
    },[rawdata])
    // console.log(rawdata);
    {/* To use google fonts with react and tailwind */}
    {/* https://www.elvisduru.com/blog/how-to-add-google-fonts-tailwind */}
    return (
        <div className="bg-light-black max-w-[1280px] mx-40 mt-40 z-20 lg:px-16 xl:px-[7.75rem] pt-[6.3125rem] pb-[5.1875rem] rounded-xl overflow-hidden text-white mb-20 font-DM_Sans relative" >
                <h1 className=' text-xl font-bold'>Our Collection</h1>
                    <svg className='absolute -top-[-2rem] right-0 left-1/2 transform ranslate-x-2/3 -z-10' width="257" height="153" viewBox="0 0 257 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04" stroke="#302522" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                <p className='text-Gray max-w-[500px] mx-auto z-10'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className='flex justify-center gap-3 align-middle my-4'>
                    <button className={` p-2 rounded-lg ${buttonSelect===0? 'bg-Gray':'bg-light-black'}`}  onClick={() => handleType(0)}>All products</button>
                    <button className={` p-2 rounded-lg ${buttonSelect===1? 'bg-Gray':'bg-light-black'}`} onClick={() => handleType(1)}>Available Now</button> 
                </div> 
                {
                    loading && <div>Loading...</div>
                }
                {!loading && data.length > 0 ? (
                    <div className='grid grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 place-items-stretch gap-12 px-[4rem] lg:px-0' >
                        {data.map((item)=><SingleCard key={item.id} item={item} /> )}
                    </div>
                ) : (
                    <div>Data not found according to the filter data</div>
                )}
            </div>
    );
}
