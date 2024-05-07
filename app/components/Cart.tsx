import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faMinus, faPlus, faCheck, faMoneyBills, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button';
import Image from 'next/image'
import {useEffect, useState} from 'react'


import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addQty, decreaseQty, deleteAllItemCart, deleteItemCart } from '../redux/slices/CartSlice';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentMethod from './PaymentMethod';


type CartItem = {
  nama: string;
  img: string;
  category: string;
  price: number;
  kode: string;
  qty: number;
};

const Cart = () => {
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const cartData = useSelector((state:any)=> state.cart.data);

  const dispatch = useDispatch();

  useEffect(()=>{
    const sum = cartData.reduce((accumulator:any,item:any)=>{
      return accumulator + item.price * item.qty;
    }, 0)
    setSubTotalPrice(sum);
    setTax(sum*5/100);
    setTotalPrice(sum-(sum*2/100));

    if(cartData.length==0){
      setActiveIndex(0);
    }
    
  }), [cartData]

  const toastClick = () =>{
    toast.success('Detele Item Success', {
      autoClose: 1000,
    });
  }

  const toastClickSuccess = () =>{
    toast.success('Payment Item Success', {
      autoClose: 1000,
    });
  }
  
  return (
    <>
      <div className='bg-light lg:bg-white rounded-xl w-full  h-full overflow-y-scroll p-2 lg:p-0 lg:pr-2 scrollbar-thin'>
        <div className='grid grid-cols-1 gap-2 p-2 lg:px-0 py-2'>
          {(cartData.length>0?
            cartData.map((data:any, index:any) => (
              <div className='p-[8px] bg-white lg:bg-light rounded-lg h-full' key={index}>
                  <div className='rounded-md overflow-hidden relative flex flex-row gap-2'>
                      <Image
                          src={`/img/${data.img}`}
                          alt={data.nama}
                          width={300}
                          height={200}
                          className='object-cover h-16 w-16 rounded-lg aspect-square'
                      />
                      <div className='flex flex-col justify-between w-full'>
                        <p className='font-semibold text-sm line-clamp-1 text-ellipsis'>{data.nama}</p>
                        <p className='text-xs font-semibold text-primary'>${data.price}<span className='text-xs text-secondary-1'>/pcs</span></p>
                        <div className='flex flex-row justify-between items-center'>
                          <span className='flex gap-1 items-center'>
                            <FontAwesomeIcon icon={faMinus} height={8} width={8} className='p-1 bg-secondary-2 w-2 h-2 rounded-sm cursor-pointer' onClick={()=>dispatch(decreaseQty({'kode':data.kode}))} />                  
                            <span className='w-6 flex justify-center'>{data.qty}</span>
                            <FontAwesomeIcon icon={faPlus} height={8} width={8} className='p-1 bg-primary w-2 h-2 rounded-sm cursor-pointer text-white' onClick={()=>dispatch(addQty({'kode':data.kode}))} />
                          </span>
                          <FontAwesomeIcon icon={faTrashCan} height={12} width={12} className='text-secondary-1 cursor-pointer' onClick={()=>{dispatch(deleteItemCart({'kode':data.kode}));toastClick();}}/>
                        </div>
                      </div>
                  </div>
              </div>
            ))
          : <span className='text-secondary-2'>Choose Menu...</span>)}
        </div>
      </div>

      <div className='max-h-1/2 w-full border-t-2 border-primary flex flex-col justify-end'>
          <p className='font-semibold text-lg'>Summary</p>
          <div className='flex flex-col text-xs gap-1 text-secondary-1'>
            <span className='flex justify-between'>
              <p>Subtotal</p>
              <p>${(subTotalPrice).toFixed(2)}</p>
            </span>
            <span className='flex justify-between'>
              <p>Discount sales</p>
              <p>$0.00</p>
            </span>
            <span className='flex justify-between'>
              <p>Tax 5%</p>
              <p>${(tax).toFixed(2)}</p>
            </span>
            <span className='border-t-2'></span>
            <span className='flex justify-between font-semibold text-black tex-sm'>
              <p>Total</p>
              <p>${(totalPrice).toFixed(2)}</p>
            </span>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-semibold'>Payment Method</p>
            <div className='w-full h-full flex flex-row flex-wrap gap-3 lg:gap-2 justify-center'>
              <PaymentMethod isActive={activeIndex==1?true:false} onShow={()=>setActiveIndex(1)} title='Cash' symbol={faMoneyBills}/>
              <PaymentMethod isActive={activeIndex==2?true:false} onShow={()=>setActiveIndex(2)} title='QR Code' symbol={faQrcode}/>
              <PaymentMethod isActive={activeIndex==3?true:false} onShow={()=>setActiveIndex(3)} title='Debit' symbol={faCreditCard}/>
              <PaymentMethod isActive={activeIndex==4?true:false} onShow={()=>setActiveIndex(4)} title='E-Money' symbol={faCreditCard}/>
            </div>
            <span onClick={()=>{dispatch(deleteAllItemCart());toastClickSuccess();}}>
              <Button title="Submit" type="button" variant={`text-white bg-primary ${activeIndex>0?'':'opacity-50 hover:cursor-not-allowed'} text-sm rounded-lg w-full shadow-lg mb-2 lg:mb-5`} />
            </span>
          </div>
      </div>
    </>
  )
}

export default Cart