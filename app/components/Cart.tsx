import React from 'react'
import HorizontalCard from './HorizontalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

type CartProp = {
    showCart : 'boolean';
}

const Cart = ({showCart} : CartProp) => {
  return (
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
  )
}

export default Cart