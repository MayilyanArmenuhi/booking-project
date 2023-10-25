import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.open);
  let logout;
  
  const handleLogout = () => {
    if (localStorage.getItem('info') !== null) {
      localStorage.removeItem('info');
    }
    dispatch({ type: 'STORAGE', payload: false });
    dispatch({ type: 'CHANGE_VALID', payload: { key: 'name', value: '' } });
    dispatch({ type: 'CHANGE_VALID', payload: { key: 'surname', value: '' } });
    dispatch({ type: 'CHANGE_VALID', payload: { key: 'login', value: '' } });
    dispatch({ type: 'CHANGE_VALID', payload: { key: 'password', value: '' } });
    logout.style.display = 'none';
  };

  useEffect(() => {
      logout = document.querySelector('.logout');
      logout.style.display = localStorage.getItem('info') !== null ? 'block' : 'none'
  })

  return (
    <header>
      <a href="#">Hotels Booking</a>
      <ul>
        <li><Link to='/Menu'>Menu</Link></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
       
      </ul>
      
      <button
        className='logout'
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}
