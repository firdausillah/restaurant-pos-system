'use client';
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCity, faArrowRotateLeft, faPenToSquare, faPlus, faGears } from '@fortawesome/free-solid-svg-icons';
import { faClock, faClipboard } from '@fortawesome/free-regular-svg-icons';

import moment from 'moment';
import Button from "./Button";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { deleteAllItemCart } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
    
    const [faArrowRotateLeftIcon, setFaArrowRotateLeftIcon] = useState(faArrowRotateLeft);
    const [faPenToSquareIcon, setFaPenToSquareIcon] = useState(faPenToSquare);
    const [showSidebar, setShowSidebar] = useState(false);
    
    const dispatch = useDispatch();

    const pathName = usePathname();

    function burgerClick(){
        setShowSidebar(!showSidebar);
    }

    const toastClickReset = () =>{
    toast.success('Reset Order Success', {
      autoClose: 1000,
    });
  }

    let currentDate = moment().format('ddd, DD MMM');
    return (
        <nav>
            <section className='grid grid-cols-2 md:grid-cols-12 py-2 md:py-4 pb-4 px-4 w-full gap-3 sticky z-40 bg-white lg:shadow-sm'>
                <FontAwesomeIcon icon={faBars} className='text-primary bg-white w-[25px] md:hidden h-[40px]' onClick={()=>burgerClick()} />

                <div className='flex gap-3 items-center justify-end md:col-span-2 h-[40px] md:col-start-11 md:row-start-1 md:w-full'>
                    {/* <span className='flex justify-center items-center bg-primary text-white p-2 rounded-full h-8 w-8 '> */}
                        {/* <FontAwesomeIcon icon={faCity} className='text-white w-[20px]' /> */}
                    {/* </span> */}
                    <Image src={'/aruna-resto-logo-2.png'} height={100} width={100} alt='/aruna-resto-logo.png' className='w-7 h-7' />
                    <div className="flex flex-col">
                        <p className="font-regular">Aruna Resto</p>
                        <p className="text-[8px] text-secondary-1">
                            {currentDate}
                        </p>
                    </div>
                    
                </div>

                <div className="col-span-2 md:col-span-10 md:col-start-1 md:row-start-1 flex justify-between h-[35px] md:h-[40px] md:justify-end gap-3 sm:gap-5">
                    <div className="flex flex-col text-right min-w-14">
                        <p className="text-xs text-secondary-1">Order no.</p>
                        <p className="font-regular text-md">#00012</p>
                        {/* <p className="font-regular text-md">#87986</p> */}
                    </div>
                    <span className='border-r-4 border-light-2'></span>
                    <Button title="Reset Order" symbol={faArrowRotateLeftIcon} type="button" variant="text-dark bg-white border-[1.5px] border-light-2 text-[10px] md:text-sm w-full md:w-auto" onClick={()=>{dispatch(deleteAllItemCart());toastClickReset();}}/>
                    <Button title="Take a note" symbol={faPenToSquareIcon} type="button" variant="text-dark bg-white border-[1.5px] border-light-2 text-[10px] md:text-sm w-full md:w-auto" />
                    <span className='border-r-4 border-light-2 hidden md-block'></span>
                </div>
            </section>
            <section id='sidebar' className='w-full h-screen overflow-hidden absolute top-0'>
                <div className={`w-3/4 md:w-[80px] md:left-0 py-2 h-full px-10 md:px-2 md:items-center flex flex-col bg-white absolute z-50 top-0 transition-all duration-300 shadow-md ${showSidebar?'right-0':'-right-full'}`}>
                    <ul className='py-5 flex items-start'>
                        <li className='flex gap-3 justify-center items-center text-dark'>
                            <span className='bg-white border-[1px] border-light-2 w-8 h-8 flex justify-center items-center rounded-md hover:scale-105 transition-all duration-150'>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                            <p className='md:hidden'>
                                Create Order
                            </p>
                        </li>
                    </ul>
                    <ul className='py-5 border-t-2 md:border-0 border-light-2 flex flex-col gap-3 items-start'>
                        <li className=''>
                            <Link
                                key={'order'}
                                href={'order'}
                                className='flex gap-3 justify-center items-center text-dark'
                            >
                                <span className={` ${pathName == '/order' ? 'bg-primary text-white shadow-md hover:scale-105 transition-all duration-150' : 'bg-white'} w-8 h-8 flex justify-center items-center rounded-md`}>
                                    <FontAwesomeIcon icon={faClipboard} />
                                </span>
                                <p className='md:hidden'>
                                    Order
                                </p>
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                key={'order'}
                                href={'order'}
                                className='flex gap-3 justify-center items-center text-dark'
                            >
                                <span className={` ${pathName == '/history' ? 'bg-primary text-white shadow-md' : 'bg-white hover:scale-105 transition-all duration-150 hover:border-[1px] hover:border-light-2'} w-8 h-8 flex justify-center items-center rounded-md`}>
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                                <p className='md:hidden'>
                                    History
                                </p>
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                key={'order'}
                                href={'order'}
                                className='flex gap-3 justify-center items-center text-dark'
                            >
                                <span className={` ${pathName == '/setting' ? 'bg-primary text-white shadow-md' : 'bg-white hover:scale-105 transition-all duration-150 hover:border-[1px] hover:border-light-2'} w-8 h-8 flex justify-center items-center rounded-md`}>
                                    <FontAwesomeIcon icon={faGears} />
                                </span>
                                <p className='md:hidden'>
                                    Options
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`w-full bg-black h-screen absolute z-40 md:hidden transition-all duration-300 ${showSidebar?'opacity-50':'opacity-0 invisible'}`} onClick={()=>burgerClick()}></div>
            </section>
        </nav>
    )
}

export default Navbar