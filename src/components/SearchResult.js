import React from 'react';
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlineStar } from 'react-icons/ai';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='flex relative m-16 p-2 pointer border-gray-400 border-4 border-dashed hover:opacity-80'>
            <img src={img} alt="" className='h-80 w-96 rounded-md overflow-hidden'/>
            <MdOutlineFavorite className="absolute top-5 right-10" />

            <div className='flex-col flex justify-between pl-3 border-gray-400 border-4'>
                <div className="w-full">
                    <p className="mt-2.5 font-xs text-gray-500 border-gray-400 border-4">{location}</p>
                    <h3 className="font-light mt-2.5 border-gray-400 border-4">{title}</h3>
                    <p className="mt-2.5 font-xs text-gray-500 border-gray-400 border-4">____</p>
                    <p className="mt-2.5 font-xs text-gray-500 border-gray-400 border-4">{description}</p>
                </div>

                <div className="flex justify-between ">
                    <div className="flex items-center">
                        <AiOutlineStar className="text-red-600" />
                        <AiOutlineStar className="text-red-600" />
                        <AiOutlineStar className="text-red-600" />
                        <AiOutlineStar className="text-red-600" />
                        <AiOutlineStar className="text-red-600" />
                        <p className="mt-2.5 font-xs text-gray-500">
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='absolute right-5 bottom-8 border-gray-400 border-4'>
                        <h2 border-gray-400 border-4>{price}</h2>
                        <p className="mt-2.5 font-xs text-gray-500 text-right border-gray-400 border-4">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult