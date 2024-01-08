import React from 'react';
import { useSelector } from 'react-redux';

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
    <div>
      {amount > stack || amount ===0 || !betStage ? (
        <div>
         <div className="opacity-0">
        <div>{amount}</div>
        <img
          src="/pokerchip.png"
          alt="poker chip"
          width="100%"
          height="100%"
        />
      </div>
        </div> // Return nothing if amount is greater than stack
      ) : (
        <>
        <div onClick={handleClick} {...rest}>
        <div>{amount}</div>
        <img
          className="bg-transparent decoration"
          src="/pokerchip.png"
          alt="poker chip"
          width="100%"
          height="100%"
        />
      </div>
        </>
      )}
      
    </div>
  );
};

export default Chip;
