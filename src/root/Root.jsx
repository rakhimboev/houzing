import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { navbar } from '../utils/navbar';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>

        {navbar.map(({path, element, id, hidden}) => {
            return (<Route path={path} key={id} element={element} />);
        })}
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={'/home'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
