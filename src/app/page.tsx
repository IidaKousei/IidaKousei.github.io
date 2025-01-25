"use client";
import { useState } from "react";
import "./globals.css";

// import { basePath } from "../../next.config" // 追加
// const BASE_PATH = basePath ? basePath : "" // 追加


export default function Home() {

  return (
    <div>
      <h1 className="title">Ikou My Create Pages</h1>
      <h2 className="subtitle">只今工事中です。しばらくお待ちください。
      </h2>
      <div className="loading">
      <div className="loading-circle"></div>
      </div>
    </div>

  );
}
