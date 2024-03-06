import React from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function MainPage() {
  return (
    <div className='container-fluid addemployee' style={{ position: 'relative' }}>
      <h1 className='text-center pt-5'>Employee List</h1>
      <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '70px', }}>
        <label style={{ fontSize: '20px' }}></label>
        {/* <FontAwesomeIcon icon={faUserTie} /> */}

      </div>
      <Outlet />
    </div>
  );
}
