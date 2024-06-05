import React from 'react';

type Props = {
  name: string;
  caseType: 'normal' | 'delete';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ name, caseType, onClick }: Props) => {
  return (
    <button
      className={`${
        caseType === 'normal' ? 'bg-[#427DDE]' : 'bg-[#D67979]'
      } w-full  text-white py-3 my-3 font-medium rounded-lg`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
