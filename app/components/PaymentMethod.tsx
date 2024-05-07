import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PaymentMethodProps = {
    isActive: boolean;
    title: string;
    symbol?: IconProp;
    onShow: ()=>void;
}

function PaymentMethod({isActive, title, symbol, onShow}: PaymentMethodProps) {
  return (
    <div className={`h-14 w-14 ${isActive?'bg-dark':'bg-white border-[1.5px] border-light-2'} flex justify-center items-center flex-col p-1 rounded-lg relative hover:shadow-md transition-all duration-200 hover:cursor-pointer`} onClick={onShow}>
      {symbol && <FontAwesomeIcon icon={symbol} height={8} width={8} className='rounded-full bg-primary w-4 h-4 flex justify-center items-center text-white p-2' />}
        <p className={`text-[10px] ${isActive?'text-white':'text-black'}`}>{title}</p>
        {isActive && <FontAwesomeIcon icon={faCheck} height={5} width={5} className='absolute w-2 h-2 bg-primary p-[1.5px] rounded-full -right-1 -top-1 text-white' />}
    </div>
  )
}

export default PaymentMethod