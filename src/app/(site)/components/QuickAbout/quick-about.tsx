import React from 'react';
import QuickAboutContent from './components/quick-about-content';

const QuickAbout = () => {
  return (
    <>
    <section className="relative w-full px-5 py-4 mt-32 lg:mt-48 bg-gray-900 h-fit text-white min-h-[250px]">
      <div className="relative z-10">
        <QuickAboutContent />
      </div>
      <div className="absolute bottom-full left-0 right-0 h-16">
        <div className="h-full bg-gray-900 lg:desktop-hero-clipping mobile-hero-clipping"></div>
      </div>
    </section>
    </>
  );
};

export default QuickAbout;