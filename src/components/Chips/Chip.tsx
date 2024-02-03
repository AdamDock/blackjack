import React from 'react';
import { useSelector } from 'react-redux';
import { PiPokerChipThin } from "react-icons/pi";
import { Icon } from '@iconify-icon/react'



interface ChipProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick'> {
  amount: number;
  color: string;
  onClick?: (amount: number) => void;
}

const Chip: React.FC<ChipProps> = ({ amount, color, onClick, ...rest }) => {
  const { stack } = useSelector((state: any) => state.chips);
  const { betStage } = useSelector((state: any) => state.game);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClick) {
      onClick(amount);
    }
  };

  return (
    <div className=''>



      {amount > stack || amount ===0 || !betStage ? (
      <div className="opacity-0">
        <div>{amount}</div>
        <img
          src="/pokerchip.png"
          alt="poker chip"
          width="100%"
          height="100%"
        />
      </div>

      ) 
      : 
      (
        <>

      <div onClick={handleClick} {...rest}>
        <div><h3 className={`text-xl font-bold`}>{amount}</h3></div>
        <svg xmlns="http://www.w3.org/2000/svg" 
        className='cursor-pointer hover:opacity-75 hover:motion-safe:animate-spin'
        width="100%" 
        height="100%" viewBox="0 0 24 24"><path style={{ fill: color }} d="M23 12c0 6.08-4.92 11-11 11S1 18.08 1 12S5.92 1 12 1s11 4.92 11 11M13 4.06c2.13.27 4.07 1.39 5.37 3.1l1.74-1A10 10 0 0 0 13 2zm-9.11 2.1l1.74 1A8.022 8.022 0 0 1 11 4.06V2a10 10 0 0 0-7.11 4.16m-1 9.94l1.73-1a8.03 8.03 0 0 1 0-6.2l-1.73-1a9.864 9.864 0 0 0 0 8.2M11 19.94a8.022 8.022 0 0 1-5.37-3.1l-1.74 1A10 10 0 0 0 11 22zm9.11-2.1l-1.74-1a8.022 8.022 0 0 1-5.37 3.1v2c2.85-.29 5.44-1.78 7.11-4.1m1-1.74c1.19-2.6 1.19-5.6 0-8.2l-1.73 1a8.03 8.03 0 0 1 0 6.2zM15 12l-3-5l-3 5l3 5z"></path></svg>

      </div>
        </>
      )}
      
    </div>
  );
};

export default Chip;
