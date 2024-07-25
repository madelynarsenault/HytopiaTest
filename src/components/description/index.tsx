import React from 'react';

interface SettingDescriptionProps {
  title: string;
  description: string;
  options: string[];
}

const SettingDescription: React.FC<SettingDescriptionProps> = ({ title, description, options }) => {
  return (
    <div className="hidden md:block w-full max-w-full h-[323px] border border-white border-opacity-15 rounded-[20px] overflow-hidden p-6 ml-5">
      <div className="w-full h-full text-justify">
        <div className="text-customWhite leading-loose text-xl font-inter font-semibold">
          {title}
        </div>
        <div className="text-customWhite text-opacity-70 text-sm font-inter font-normal mt-3">
          {description}
        </div>
        <div className="text-customWhite text-opacity-70 text-sm font-inter font-normal mt-5 mb-5">
          <p>The other options are:</p>
        </div>
        <div className="text-customWhite text-opacity-70 font-inter text-sm font-normal mt-2">
          <ul className="list-disc list-inside space-y-1.5">
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingDescription;
