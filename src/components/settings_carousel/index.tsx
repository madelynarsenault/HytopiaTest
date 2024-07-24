"use client";

import Head from 'next/head';
import Navbar from '../navbar';
import SettingsToggle from '../settings_carousel';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[url('/path_to_your_image.jpg')] bg-cover bg-center">
      <Head>
        <title>Settings Page</title>
        <meta name="description" content="Settings page for the application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative flex-1 flex flex-col items-center justify-center mt-[5.88rem] z-10 space-y-4">
        <SettingsToggle title="Graphics" items={["Low", "Medium", "High"]} />
        <SettingsToggle title="Clouds" items={["None", "Few", "Many"]} />
      </main>
    </div>
  );
};

export default Home;
