import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faMinus, faPlus,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import {useState} from 'react'

type HorizontalCardProp = {
 nama:string;
 img:string;
 category:string;
 price:number;
 kode:string;
 menuProp: (data: CartItem) => void;
};

type CartItem = {
  nama: string;
  img: string;
  category: string;
  price: number;
  kode: string;
};

const HorizontalCard = ({nama, img, category, price, kode, menuProp} : HorizontalCardProp) => {
  const [count, setCount] = useState(1);

  function plusBtn(){
    setCount(count+1);
  }

  function minBtn(){
    setCount(count-1);
  }

  const decreaseMenu = () => {
    let data = {
      'nama':nama, 
      'img':img, 
      'category':category, 
      'price':price, 
      'kode':kode,
      'count':1
    };

    menuProp(data);
  }
  
  return (
     <div className='p-[8px] bg-white lg:bg-light rounded-lg h-full'>
        <div className='rounded-md overflow-hidden relative flex flex-row gap-2'>
            <Image
                src={`/img/${img}`}
                alt={nama}
                width={300}
                height={200}
                className='object-cover h-16 w-16 rounded-lg aspect-square'
            />
            <div className='flex flex-col justify-between w-full'>
              <p className='font-semibold text-sm line-clamp-1 text-ellipsis'>{nama}</p>
              <p className='text-xs font-semibold text-primary'>${price}<span className='text-xs text-secondary-1'>/pcs</span></p>
              <div className='flex flex-row justify-between items-center'>
                <span className='flex gap-1 items-center'>
                  <FontAwesomeIcon icon={faMinus} height={8} width={8} className='p-1 bg-secondary-2 w-2 h-2 rounded-sm cursor-pointer' onClick={()=>minBtn()} />                  
                  <span className='w-6 flex justify-center'>{count}</span>
                  <FontAwesomeIcon icon={faPlus} height={8} width={8} className='p-1 bg-primary w-2 h-2 rounded-sm cursor-pointer text-white' onClick={()=>plusBtn()} />
                </span>
                <FontAwesomeIcon icon={faTrashCan} height={12} width={12} className='text-secondary-1 cursor-pointer' onClick={()=>decreaseMenu()}/>
              </div>
            </div>
        </div>
     </div>
  )
}

export default HorizontalCard