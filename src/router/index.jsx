import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { NotFound } from '../pages/notFound';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/climate-check/" element={<Home />} />
        <Route path="/climate-check/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
