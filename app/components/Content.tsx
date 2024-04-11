'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { faArrowLeft, faCartShopping, faCheck, faMoneyBills, faQrcode} from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter';
import Button from './Button';
import Cart from './Cart';
import HorizontalCard from './HorizontalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import MenuData from '@/lib/MenuData';

const Content = () => {
  const [showCart, setShowCart] = useState(true);

  // console.log(MenuData);

    function cartBtn(){
      setShowCart(!showCart);
    }
  return (
    <div className='lg:flex lg:flex-wrap relative h-full overflow-hidden'>
      <div className='h-full bg-light flex flex-col lg:w-3/4 rounded-t-3xl lg:rounded-none px-2 pt-3 scrollbar-thumb-primary scrollbar-track-light'>
        <Filter/>
        <div className="overflow-y-scroll h-full flex-1 scrollbar-thin">
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 '>
            {MenuData.map((data, index) => (
              <Card key={index}  nama = {data.nama} img = {data.img} kategori = {data.kategori} price = {data.price} />
            ))}
          </div>
        </div>
        <span onClick={()=>cartBtn()} className='hover:cursor-pointer'>
          <Button title="My Cart" symbol={faCartShopping} type="button" variant="text-white bg-primary text-sm scale-110 w-32 lg:w-auto lg:hidden fixed bottom-5 right-5 shadow-lg"  />
        </span>
      </div>
      
      <div className={`bg-white lg:w-1/4 w-full h-full absolute lg:static z-30 ${showCart?'right-full':'right-0'} top-0 px-4 flex flex-col justify-between gap-2 transition-all duration-300 scrollbar-thumb-primary scrollbar-track-light`}>
        <div className='flex items-center justify-between'>
          <p>Current Order</p>
          <FontAwesomeIcon icon={faArrowLeft} onClick={()=>cartBtn()} className='hover:cursor-pointer lg:hidden' height={20} width={20} />
        </div>

        <div className='bg-light lg:bg-white rounded-xl w-full  h-full overflow-y-scroll p-2 lg:p-0 lg:pr-2 scrollbar-thin'>
          <div className='grid grid-cols-1 gap-2 p-2 lg:px-0 py-2'>
            {MenuData.map((data, index) => (
              <HorizontalCard key={index} nama={data.nama} img={data.img} kategori={data.kategori} price={data.price} />
            ))}
          </div>
        </div>

        <div className='max-h-1/2 w-full border-t-2 border-primary flex flex-col justify-end'>
            <p className='font-semibold text-lg'>Summary</p>

            <div className='flex flex-col text-xs gap-1 text-secondary-1'>
              <span className='flex justify-between'>
                <p>Subtotal</p>
                <p>$67.81</p>
              </span>
              <span className='flex justify-between'>
                <p>Discount sales</p>
                <p>$0</p>
              </span>
              <span className='flex justify-between'>
                <p>Tax</p>
                <p>$4.00</p>
              </span>
              <span className='border-t-2'></span>
              <span className='flex justify-between font-semibold text-black tex-sm'>
                <p>Total</p>
                <p>$71.81</p>
              </span>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-semibold'>Payment Method</p>
              <div className='w-full h-full flex flex-row flex-wrap gap-3 lg:gap-2 justify-center'>
                
                <div className='h-14 w-14 bg-white border-[1.5px] border-light-2 flex justify-center items-center flex-col p-1 rounded-lg relative'>
                  <FontAwesomeIcon icon={faMoneyBills} height={8} width={8} className='rounded-full bg-primary w-4 h-4 flex justify-center items-center text-white p-2' />
                  <p className='text-[10px] text-black'>Cash</p>
                </div>

                <div className='h-14 w-14 bg-dark flex justify-center items-center flex-col p-1 rounded-lg relative'>
                  <FontAwesomeIcon icon={faQrcode} height={8} width={8} className='rounded-full bg-primary w-4 h-4 flex justify-center items-center text-white p-2' />
                  <p className='text-[10px] text-white'>QR Code</p>
                  <FontAwesomeIcon icon={faCheck} height={5} width={5} className='absolute w-2 h-2 bg-primary p-[1.5px] rounded-full -right-1 -top-1 text-white' />
                </div>

                <div className='h-14 w-14 bg-white border-[1.5px] border-light-2 flex justify-center items-center flex-col p-1 rounded-lg relative'>
                  <FontAwesomeIcon icon={faCreditCard} height={8} width={8} className='rounded-full bg-primary w-4 h-4 flex justify-center items-center text-white p-2' />
                  <p className='text-[10px] text-black'>Debit</p>
                </div>

                <div className='h-14 w-14 bg-white border-[1.5px] border-light-2 flex justify-center items-center flex-col p-1 rounded-lg relative'>
                  <FontAwesomeIcon icon={faCreditCard} height={8} width={8} className='rounded-full bg-primary w-4 h-4 flex justify-center items-center text-white p-2' />
                  <p className='text-[10px] text-black'>E-Money</p>
                </div>

              </div>
              <Button title="Submit" type="button" variant="text-white bg-primary text-sm rounded-lg w-full shadow-lg mb-2"  />
            </div>
        </div>
      </div>


    </div>
  )   
}

export default Content