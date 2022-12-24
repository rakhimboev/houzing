import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { navbar } from '../utils/navbar';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>

        {navbar.map(({path, element, id}) => {
            return <Route path={path} key={id} element={element} />;
        })}
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
