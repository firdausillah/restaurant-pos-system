'use client'
import React, { useState } from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartShopping, faPenToSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter';
import Button from './Button';
import HorizontalCard from './HorizontalCard';

const Content = () => {
  const [faStarIcon, setFaStarIcon] = useState(faStar);
  const [showCart, setShowCart] = useState(false);

    function cartBtn(){
      setShowCart(!showCart);
    }
  return (
    <div className='md:flex md:flex-wrap relative h-full'>
      <div className='h-full bg-light flex flex-col md:w-2/3 rounded-t-3xl md:rounded-none px-2 pt-3 scrollbar-thumb-primary scrollbar-track-light'>
        <Filter/>
        <div className="overflow-y-scroll h-full flex-1 scrollbar-thin">
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 '>
            {Array(13).fill(1).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
        <span onClick={()=>cartBtn()} className='hover:cursor-pointer'>
          <Button title="My Cart" symbol={faCartShopping} type="button" variant="text-white bg-primary text-sm scale-110 w-32 md:w-auto md:hidden fixed bottom-5 right-5 shadow-md"  />
        </span>
      </div>
      <div className={`bg-white md:w-1/3 w-full h-full md:block ${showCart?'block':'hidden'} absolute md:static z-50 top-0 left-0 px-4 flex flex-col gap-2`}>
        <div className='flex items-center justify-between'>
          <p>Current Order</p>
          <FontAwesomeIcon icon={faArrowLeft} onClick={()=>cartBtn()} className='hover:cursor-pointer' />
        </div>

        <div className='bg-light rounded-xl w-full h-1/2 overflow-y-scroll p-2'>
          <div className='grid grid-cols-1 gap-2 p-2 '>
            {Array(13).fill(1).map((_, index) => (
              <HorizontalCard key={index} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Content