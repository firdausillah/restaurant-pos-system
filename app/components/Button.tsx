import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// { untuk memasukan icon melalui props, import dan buat menjadi use state icon di parent, baru dikirim melalui props ke button}
type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    symbol?: IconProp;
    variant: string;

}

const Button = ({type, title, variant, symbol} : ButtonProps) => {
  return (
    <button type={type} className={`gap-1 rounded-lg py-1 px-3 ${variant}`}>
        {symbol && <FontAwesomeIcon className='mr-1' icon={symbol} height={10} width={10} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button