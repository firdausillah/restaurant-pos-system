import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faCookieBite, faGlassWater, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'

const Filter = () => {
  return (
        <div id='filter' className='grid grid-cols-4 mt-2 mb-4 gap-2 scrollbar-thumb-primary scrollbar-track-light'>
            <div id='search' className='col-span-4 md:col-start-1 md:row-start-2 md:col-span-2 rounded-lg overflow-hidden flex flex-row justify-center items-center bg-white'>
              <input type="text" id='search' className='w-full h-8 px-2 focus:outline-none' placeholder='Search menu...'/>
              <button className='m-1 p-2 bg-light w-7 h-7 rounded-lg text-md flex items-center justify-center text-secondary-1'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className='overflow-x-scroll md:overflow-hidden flex gap-2 col-span-3 md:col-start-1 md:row-start-1 md:col-span-4 scrollbar-thin'>
              <Button type='button' title='Most Ordered' symbol={faStar} variant='bg-primary text-white flex flex-row jurtify-center items-center gap-1 text-xs md:text-sm'/>
              <Button type='button' title='Snack' symbol={faCookieBite} variant='bg-white text-secondary-1 flex flex-row jurtify-center items-center gap-1 text-xs md:text-sm'/>
              <Button type='button' title='Food' symbol={faBowlFood} variant='bg-white text-secondary-1 flex flex-row jurtify-center items-center gap-1 text-xs md:text-sm'/>
              <Button type='button' title='Beverage' symbol={faGlassWater} variant='bg-white text-secondary-1 flex flex-row jurtify-center items-center gap-1 text-xs md:text-sm'/>
            </div>
            {/* <span className='border-r-4 border-light-2'></span> */}
            <div id='sort' className='flex justify-center border-l-2 border-primary pl-1 md:border-none md:pl-0 md:col-start-4 md:row-start-2'>
              <select name="ks" id="sd" className='w-full bg-transparent text-[10px] focus:outline-none text-right md:text-sm'>
                <option value="Cheaper">Cheaper</option>
                <option value="Expensive">Expensive</option>
                <option value="Popularity">Popularity</option>
              </select>
            </div>
        </div>
  )
}

export default Filter