"use client";
import { useEffect } from "react";
import "./globals.css";

// import { basePath } from "../../next.config" // 追加
// const BASE_PATH = basePath ? basePath : "" // 追加


export default function Home() {
  useEffect(() => {
    const text = document.querySelector('.text');
    if (text) {
      text.classList.add('is-active');
      const interval = setInterval(() => {
        text.classList.toggle('is-active');
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
  <div className="container">
    <div className="visuallyHidden">IKOU Creative Pages</div>
    <div className="text" aria-hidden="true">
      <span className="char" style={{ "--char-index": 0 } as React.CSSProperties}> I </span>
      <span className="char" style={{ "--char-index": 1 } as React.CSSProperties}> k </span>
      <span className="char" style={{ "--char-index": 2 } as React.CSSProperties}> o </span>
      <span className="char" style={{ "--char-index": 3 } as React.CSSProperties}> u </span>
      <span className="whitespace">&nbsp;</span>
      <span className="char" style={{ "--char-index": 4 } as React.CSSProperties}> C </span>
      <span className="char" style={{ "--char-index": 5 } as React.CSSProperties}> r </span>
      <span className="char" style={{ "--char-index": 6 } as React.CSSProperties}> e </span>
      <span className="char" style={{ "--char-index": 7 } as React.CSSProperties}> a </span>
      <span className="char" style={{ "--char-index": 8 } as React.CSSProperties}> t </span>
      <span className="char" style={{ "--char-index": 9 } as React.CSSProperties}> i </span>
      <span className="char" style={{ "--char-index": 10 } as React.CSSProperties}> v </span>
      <span className="char" style={{ "--char-index": 11 } as React.CSSProperties}> e </span>
      <span className="whitespace">&nbsp;</span>
      <span className="char" style={{ "--char-index": 12 } as React.CSSProperties}> P </span>
      <span className="char" style={{ "--char-index": 13 } as React.CSSProperties}> a </span>
      <span className="char" style={{ "--char-index": 14 } as React.CSSProperties}> g </span>
      <span className="char" style={{ "--char-index": 15 } as React.CSSProperties}> e </span>
      <span className="char" style={{ "--char-index": 16 } as React.CSSProperties}> s </span>
    </div>
    <br></br>
    <h2 className="subtitle">Coming Soon...</h2>
    <div className="loading">
      <div className="loading-circle"></div>
    </div>
  </div>
  );
}
