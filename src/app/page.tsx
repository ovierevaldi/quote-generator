'use client'

import { quotes } from '@/quotes';
import randomNumber from 'random-number';
import { useState } from 'react';

export default function Home() {
  const [currentQuotes, setCurrentQuotes] = useState('');

  const generateQuote = () => {
    const randomIndex = randomNumber({min: 1, max: 10, integer: true});
    toggleOpacity();
    setCurrentQuotes(quotes[randomIndex - 1]);
  };

  const toggleOpacity = () => {
    const quoteText = document.getElementById('quote-text');
    quoteText?.classList.remove('fade-in');
    void quoteText?.offsetWidth; // Trigger reflow to reset the animation
    quoteText?.classList.add('fade-in')
  }

  return (
    <>
      <div className="grid h-screen place-items-center">
        <p className="text-4xl md:text-5xl">Quote Generator</p>

        <div
          className='max-w-[300px] md:max-w-xl text-center border p-8 rounded-lg'>
          <p className="text-xl md:text-3xl italic" id='quote-text'>
            {currentQuotes ? currentQuotes : 'Try generate...'}
          </p>
        </div>

        <button className="px-8 py-4 rounded bg-black text-white border-white border hover:bg-white hover:text-black " 
          onClick={generateQuote}
        >Generate
        </button>
      </div>
      <footer className='float-right pr-4 italic'>
        Author: Ovie Revaldi
      </footer>
    </>
  );
}
