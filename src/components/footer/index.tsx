import React from 'react';

const Footer: React.FC = () => {
  const buttonBaseClasses = "text-xl font-bold w-full max-w-[218px] h-[60px] rounded-2xl focus:outline-none";
  const restoreButtonClasses = "text-white text-opacity-50 border border-customWhite border-opacity-50 hover:bg-gray-600";
  const saveButtonClasses = "bg-white text-toggleDark hover:bg-customWhite";

  return (
    <footer className="w-full px-4 lg:px-14 bg-footerDark h-[96px] flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
      <button className={`${buttonBaseClasses} ${restoreButtonClasses}`}>
        Restore Defaults
      </button>
      <button className={`${buttonBaseClasses} ${saveButtonClasses}`}>
        Save Settings
      </button>
    </footer>
  );
};

export default Footer;
