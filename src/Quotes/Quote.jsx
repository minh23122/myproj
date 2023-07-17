/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Quote() {
    const [quote, setQuote]=useState("");
    const [author, setAuthor]=useState("");
    const getQuote=async()=> {const res=fetch("http://localhost:3000/quote")
    const data=await res;
    const quote1= await (data.json());
    setQuote(quote1.quote);
    setAuthor(quote1.author);
    }
    useEffect(()=>
    getQuote
    )
    return (  
        <div>
            <p>Quote: {quote}</p>
            <p style={{fontWeight:"bold", fontStyle:"italic"}}>Author: {author}</p>
        </div>
    );
}

export default Quote;