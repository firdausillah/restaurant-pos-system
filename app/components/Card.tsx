import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState, Suspense } from 'react'
import { FilterSkeleton } from './skeleton'

type CardProps = {
 nama:string;
 img:string;
 kategori:string;
 price:number;
 kode:string;
 menuProp: (data: CartItem) => void;
};

type CartItem = {
  nama: string;
  img: string;
  kategori: string;
  price: number;
  kode: string;
};

// interface ChildComponentProps {
// }

const Card = ({nama, img, kategori, price, kode, menuProp} : CardProps) => {
  const [menus, setMenus] = useState(Array());

  const addMenu = () => {
    let data = {
      'nama':nama, 
      'img':img, 
      'kategori':kategori, 
      'price':price, 
      'kode':kode
    };

    menuProp(data);
  }
  return (
    <Suspense fallback={<FilterSkeleton />}>
      {/* <Filter searchProp={updateSearch}/> */}
     <div className='p-[5px] bg-white rounded-lg'>
      {/* <div className='overflow-hidden rounded-lg shadow-lg bg-white'> */}
        <div className='rounded-md overflow-hidden relative'>
            <Image
                src={`/img/${img}`}
                alt={nama}
                width={300}
                height={200}
                className='aspect-3/2 object-cover'
            />
            <p className='font-semibold text-md line-clamp-1 text-ellipsis'>{nama}</p>
            <p className='text-xs text-secondary-1 line-clamp-1 text-ellipsis'>{kategori}</p>
            <p className='text-sm font-semibold text-primary'>${price}<span className='text-xs text-secondary-1'>/pcs</span></p>
            <span className='absolute bottom-1 right-2 w-6 h-6 p-1 bg-primary flex justify-center items-center rounded-full border-2 border-white text-white hover:scale-110 hover:cursor-pointer transition-all duration-150' onClick={()=>addMenu()}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
      {/* </div> */}
     </div>
    </Suspense>
  )
}

export default Card