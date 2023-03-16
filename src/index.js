import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './App.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadFiles from "./Components/UploadFiles";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="uploadfiles" element={<UploadFiles />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);