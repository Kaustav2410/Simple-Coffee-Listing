import React, { useState,useContext,useEffect } from 'react'
import { AppContext } from "../context/appContext";
import { SingleCard } from './SingleCard'
import coffee from '../media/bg-cafe.jpg'

export const CollectionCard = () => { 
    const { rawdata,loading } = useContext(AppContext);
    const [data,setData] = useState([]); 
    function handleType(type) {
        if (type === 0) {
            setData(rawdata);
        } else {
            setData(rawdata.filter(item => item.available === true)); 
        }
    }
    useEffect(()=>{
        setData(rawdata);
    },[rawdata])
    // console.log(rawdata);
    {/* To use google fonts with react and tailwind */}
    {/* https://www.elvisduru.com/blog/how-to-add-google-fonts-tailwind */}
    return (
        <div className="bg-light-black max-w-[1100px] xl:max-w-[750px] lg:max-w-[450px] text-white flex-col gap-5 px-12 py-20 flex align-middle font-DM_Sans rounded-lg relative overflow-hidden mx-auto" >
                <h1 className=' text-xl font-bold'>Our Collection</h1>
                    <svg className='absolute top-4 right-0 inset-x-2/4 ' width="257" height="153" viewBox="0 0 257 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04" stroke="#302522" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                <p className='text-Gray max-w-[500px] mx-auto z-10'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className='flex justify-center gap-3 align-middle'>
                    <button className='hover:bg-gray-600 p-2 rounded-lg' onClick={() => handleType(0)}>All products</button>
                    <button className='hover:bg-gray-600 p-2 rounded-lg' onClick={() => handleType(1)}>Available Now</button>
                </div> 
                {
                    loading && <div>Loading...</div>
                }
                {!loading && data.length > 0 ? (
                    <div className='grid grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 place-items-stretch gap-12 ' >
                        {data.map((item)=><SingleCard key={item.id} item={item} /> )}
                    </div>
                ) : (
                    <div>Data not found according to the filter data</div>
                )}
            </div>
    );
}
