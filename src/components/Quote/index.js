import React, { useState, useEffect } from "react";
import "./quote.css";
// import Quiz from "../Quiz"
// import TextToImage from 'reactjs-text-to-image';

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // const { speak } = useSpeechSynthesis();

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  return (
    <>
      <div className="App flex justify-center h-screen items-center flex-col w-screen">
        <div className="quote h-[320px] br-[400px] pt-50px flex justify-center items-center flex-col">
          <h2>{quote}</h2>
          <small>By {author}</small>
        </div>
        <button className="new-quote" onClick={fetchNewQuote}>
          Generate New Quote
        </button>
        <br />
        {/* <Quiz /> */}
      </div>
    </>
  );
}

export default Quote;

//  https://opentdb.com/api.php?amount=10
