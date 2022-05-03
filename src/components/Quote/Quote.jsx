import { useState, useEffect } from 'react';
import './Quote.css';
import quotedata from './quotes';

function Quote() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    Math.floor(Math.random() * quotedata.length);
    setQuote(quotedata[Math.floor(Math.random() * quotedata.length)]);
  }, []);
  return (
    <div className='quote-container'>
      <div className='quote-quote'>
        <p className='quote-quote-text'>{quote.quote}</p>
      </div>
      <div className='quote-author'>
        <p className='quote-author-text'>-{quote.author}</p>
      </div>
    </div>
  );
}

export default Quote;
