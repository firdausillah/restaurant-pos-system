import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type CardProps = {
 nama:string;
 img:string;
 category:string;
 price:number;
 kode:string;
};


const Card = ({nama, img, category, price, kode} : CardProps) => {
  const dispatch = useDispatch();

  const toastClick = () =>{
    toast.success('Add Item Success', {
      autoClose: 1000,
    });
  }
  return (
     <div className='p-[5px] bg-white rounded-lg'>
      {/* <div className='overflow-hidden rounded-lg shadow-lg bg-white'> */}
        <div className='rounded-md overflow-hidden relative'>
            <Image
                src={`/img/${img}`}
                alt={nama}
                width={300}
                height={200}
                className='aspect-3/2 object-cover w-full'
            />
            <p className='font-semibold text-md line-clamp-1 text-ellipsis'>{nama}</p>
            <p className='text-xs text-secondary-1 line-clamp-1 text-ellipsis'>{category}</p>
            <p className='text-sm font-semibold text-primary'>${price}<span className='text-xs text-secondary-1'>/pcs</span></p>
            <span className='absolute bottom-1 right-2 w-6 h-6 p-1 bg-primary flex justify-center items-center rounded-full border-2 border-white text-white hover:scale-110 hover:cursor-pointer transition-all duration-150' onClick={()=>{dispatch(addToCart({ 'nama':nama,  'img':img,  'category':category,  'price':price, 'kode':kode, 'qty':1 }));toastClick();}}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
      {/* </div> */}
     </div>
  )
}

export default Card