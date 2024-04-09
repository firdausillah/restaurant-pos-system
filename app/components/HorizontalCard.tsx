import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faMinus, faPlus,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const HorizontalCard = () => {
  return (
     <div className='p-[8px] bg-white md:bg-light rounded-lg h-full'>
        <div className='rounded-md overflow-hidden relative flex flex-row gap-2'>
            <Image
                src="/img/food.jpg"
                alt="Image from Lorem Picsum"
                width={300}
                height={200}
                className='object-cover h-16 w-16 rounded-lg'
            />
            <div className='flex flex-col justify-between w-full'>
              <p className='font-semibold text-sm line-clamp-1 text-ellipsis'>Pasta Lasagna bro bukan yang itu</p>
              <p className='text-xs font-semibold text-orange-500'>$10.5<span className='text-xs text-secondary-1'>/pcs</span></p>
              <div className='flex flex-row justify-between items-center'>
                <span className='flex gap-1 items-center'>
                  <FontAwesomeIcon icon={faMinus} height={8} width={8} className='p-1 bg-light-2 md:bg-secondary-2 w-2 h-2 rounded-sm cursor-pointer' />                  
                  <span className='w-6 flex justify-center'>4</span>
                  <FontAwesomeIcon icon={faPlus} height={8} width={8} className='p-1 bg-primary w-2 h-2 rounded-sm cursor-pointer text-white' />
                </span>
                <FontAwesomeIcon icon={faTrashCan} height={12} width={12} className='text-secondary-1 cursor-pointer'/>
              </div>
            </div>
        </div>
     </div>
  )
}

export default HorizontalCard