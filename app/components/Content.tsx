'use client'
import React, { useState } from 'react'
import Card from './Card'
import { faArrowLeft, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter';
import Button from './Button';
import Cart from './Cart';
import HorizontalCard from './HorizontalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content = () => {
  const [showCart, setShowCart] = useState(true);

    function cartBtn(){
      setShowCart(!showCart);
    }
  return (
    <div className='md:flex md:flex-wrap relative h-full overflow-hidden'>
      <div className='h-full bg-light flex flex-col md:w-3/4 rounded-t-3xl md:rounded-none px-2 pt-3 scrollbar-thumb-primary scrollbar-track-light'>
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
      
      <div className={`bg-white md:w-1/4 w-full h-full absolute md:static z-30 ${showCart?'left-full':'left-0'} top-0 px-4 flex flex-col gap-2 transition-all duration-300 scrollbar-thumb-primary scrollbar-track-light`}>
        <div className='flex items-center justify-between'>
          <p>Current Order</p>
          <FontAwesomeIcon icon={faArrowLeft} onClick={()=>cartBtn()} className='hover:cursor-pointer md:hidden' height={20} width={20} />
        </div>

        <div className='bg-light md:bg-white rounded-xl w-full h-1/2 md:h-3/5 overflow-y-scroll p-2 md:p-0 md:pr-2 scrollbar-thin'>
          <div className='grid grid-cols-1 gap-2 p-2 md:px-0 py-2'>
            {Array(5).fill(1).map((_, index) => (
              <HorizontalCard key={index} />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Content