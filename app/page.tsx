"use client"
import React, { useState } from 'react';
import Navbar from '../src/components/navbar';
import SettingsToggle from '../src/components/settings_carousel';
import Footer from '../src/components/footer';
import PillButton from '../src/components/pill_buttons';
import SettingDescription from '../src/components/description';
import { descriptions, graphicsConfig, displayConfig } from "../src/helpers_common";
import { IoInformationCircleOutline } from 'react-icons/io5';

interface SettingsToggleProps {
  title: string;
  items: string[];
  onChange: (index: number, title: string) => void;
  initialIndex?: number;
}

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGraphicsOption, setSelectedGraphicsOption] = useState('Fancy');
  const graphicsOptions = Object.keys(descriptions.Graphics.options);

  const handleSettingsChange = (index: number, title: string) => {
    if (title === "Graphics Quality") {
      const selectedOption = graphicsOptions[index];
      setSelectedGraphicsOption(selectedOption);
    }
  };

  const sectionTitleClasses = "text-xl font-bold text-white";
  const sectionContainerClasses = "w-full flex flex-col items-start px-8 py-8 bg-opacity-70";
  const borderClasses = "border-t border-b border-[#f1f1f1] opacity-10 mx-14";
  const infoIconClasses = "text-customWhite text-opacity-50 cursor-pointer";
  const tooltipClasses = "absolute bottom-full left-0 mb-1 hidden group-hover:block w-56 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg";

  return (
    <div className="relative min-h-screen flex flex-col object-cover bg-[linear-gradient(to_right_bottom,rgba(13,13,13,1),rgba(13,13,13,.7)),url('/HytopiaBackground.jpeg')]
 bg-cover bg-center bg-no-repeat bg-fixed">
      <Navbar />
      <div className={`${borderClasses} mt-5`}></div>
      <section className={sectionContainerClasses}>
        <div className="flex flex-col items-start sm:flex-row sm:items-center w-full">
          <h2 className={`${sectionTitleClasses} mb-4 sm:mb-0 sm:px-7 sm:mr-28`}>Settings</h2>
          <div className="w-full flex flex-wrap space-x-1 sm:space-x-4 mr-8">
            {['Video', 'Game', 'Interface', 'Keyboard', 'Mouse', 'Audio', 'Chat', 'Privacy'].map((label, index) => (
              <PillButton
                key={index}
                label={label}
                onClick={() => setSelectedCategory(label)}
                selected={selectedCategory === label}
                className="flex-grow w-fit"
              />
            ))}
          </div>
        </div>
      </section>

      <div className={`${borderClasses}`}></div>

      <main className="relative flex-1 flex mt-7 px-14">
        <div className="flex-1 flex flex-col items-start">
          <section className="mb-6 w-full">
            <div className="flex items-center mb-4">
              <h2 className={`${sectionTitleClasses} mr-2 ml-2`}>Display</h2>
              <div className="relative group">
                <IoInformationCircleOutline className={infoIconClasses} size={20} />
                <div className={tooltipClasses}>
                  & I am a tooltip for display info!
                </div>
              </div>
            </div>
            <div>
              {displayConfig.map((setting, index) => (
                <SettingsToggle
                  key={index}
                  title={setting.title}
                  items={setting.items}
                  onChange={(idx) => handleSettingsChange(idx, setting.title)}
                  initialIndex={setting?.initialIndex || 0}
                />
              ))}
            </div>
          </section>

          <section className="w-full">
            <div className="flex items-center mb-4">
              <h2 className={`${sectionTitleClasses} text-customWhite ml-2 mr-2`}>Graphics</h2>
              <div className="relative group">
                <IoInformationCircleOutline className={infoIconClasses} size={20} />
                <div className={tooltipClasses}>
                  & I am a tooltip for graphics info!
                </div>
              </div>
            </div>
            <div>
              {graphicsConfig.map((setting, index) => (
                <SettingsToggle
                  key={index}
                  title={setting.title}
                  items={setting.items}
                  onChange={(idx) => handleSettingsChange(idx, setting.title)}
                  initialIndex={setting.initialIndex || 0}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="mr-11 mt-[2.3rem]">
          <SettingDescription
            title={descriptions.Graphics.options[selectedGraphicsOption]?.title || ""}
            description={descriptions.Graphics.options[selectedGraphicsOption]?.description || ""}
            options={graphicsOptions}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
