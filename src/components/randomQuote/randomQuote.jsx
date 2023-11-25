import React,{useState} from 'react';
import './randomQuote.css'
import twitter_icon from '../Assets/Twitter-logo-x.jpg'
import relaod_icon from '../Assets/reload.png'

// Arrow Function Component
const RandomQuote = () => {
    
    let quotes = [];

     async function loadQuotes(){
        const response =await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
     }

    const [quote,setQuote] = useState({
        text:"Be happy in any condition",
        author:"Abhishek Singh"
    });
    
    const random = ()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);    
        }

        const twitter =()=>{
            window.open(`https://twitter.com/home?lang=en-in=${quote.text}-${quote.author}`)
        }

        loadQuotes();
    return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">{quote.author}</div>
                <div className="icons">
                    <img src={relaod_icon} onClick={()=>{random()}} alt=""/>
                    <img src={twitter_icon} onClick={()=>{twitter()}} alt=''/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RandomQuote;
