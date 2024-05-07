'use client'
import React, { useEffect, useState, Suspense } from 'react'
import Card from './Card'
import { faArrowLeft, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter';
import Button from './Button';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuData from '@/lib/MenuData';
import { FilterSkeleton } from './skeleton';

import { ToastContainer } from 'react-toastify';

type CartItem = {
  nama: string;
  img: string;
  category: string;
  price: number;
  kode: string;
  qty: number;
};

type contentProps = {
  queryProp?: string;
  categoryProp?: string; 
  cartReset?: () => void;
}

function Content ({queryProp, categoryProp, cartReset} : contentProps) {
  
  const [showCart, setShowCart] = useState(true);
  
  const [menuList, setMenuList] = useState(MenuData);
  
  useEffect(()=>{
    const query = queryProp ? queryProp.toLowerCase():'';
    const category = categoryProp ? categoryProp.toLowerCase():'';
    const filteredData = MenuData.filter(item => 
      item.nama.toLowerCase().includes(query) && item.category.toLowerCase().includes(category)
    );
    setMenuList(filteredData);

  }, [queryProp, categoryProp]);

  return (
    <>
      <ToastContainer />
      <div className='lg:flex lg:flex-wrap relative h-full overflow-hidden'>
        <div className='h-full bg-light flex flex-col lg:w-3/4 rounded-t-3xl lg:rounded-none px-2 pt-3 scrollbar-thumb-primary scrollbar-track-light'>
          <Suspense fallback={<FilterSkeleton />}>
            <Filter/>
          </Suspense>
          <div className="overflow-y-scroll h-full flex-1 scrollbar-thin">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 '>
              <Suspense fallback={<FilterSkeleton />}>
                {menuList.map((data, index) => (
                  <Card key={index}  nama = {data.nama} img = {data.img} category = {data.category} price = {data.price} kode={data.kode} />
                ))}
              </Suspense>
            </div>
          </div>
          <span onClick={()=>setShowCart(!showCart)} className='hover:cursor-pointer'>
            <Button title="My Cart" symbol={faCartShopping} type="button" variant="text-white bg-primary text-sm scale-110 w-32 lg:w-auto lg:hidden fixed bottom-5 right-5 shadow-lg"  />
          </span>
        </div>
        
        <div className={`bg-white lg:w-1/4 w-full h-full absolute lg:static z-30 ${showCart?'right-full':'right-0'} top-0 px-4 flex flex-col justify-between gap-2 transition-all duration-300 scrollbar-thumb-primary scrollbar-track-light lg:mt-2`}>
          <div className='flex items-center justify-between'>
            <p>Current Order</p>
            <FontAwesomeIcon icon={faArrowLeft} onClick={()=>setShowCart(!showCart)} className='hover:cursor-pointer lg:hidden' height={20} width={20} />
          </div>

          <Cart />

        </div>

      </div>
    </>
  )   
}

export default Content