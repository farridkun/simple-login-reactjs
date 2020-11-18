import React from 'react';
import { checkLogin } from '../Helper';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {checkLogin() && (
        <>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </>
      )}
      {!checkLogin() && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
