import React from 'react';

interface PillButtonProps {
  label: string;
  onClick: () => void;
  selected: boolean;
}

const PillButton: React.FC<PillButtonProps> = ({ label, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 h-9 px-2 sm:px-6 py-2 mb-2 sm:mb-0 rounded-xl text-sm font-semibold focus:outline-none transition-colors duration-300 ${selected ? 'bg-gradient-to-b from-[#181818] to-[#050505] border border-customWhite text-white' : 'bg-customWhite bg-opacity-5 backdrop-blur-2xl text-white text-opacity-50 hover:bg-gray-700 hover:bg-opacity-10'}`}
    >
      {label}
    </button>
  );
};

export default PillButton;
