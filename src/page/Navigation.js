import React from 'react';
import { checkAdmin, checkLogin } from '../Helper';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {checkLogin() && (
        <>
          {checkAdmin() && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </>
      )}
      {!checkLogin() && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigation;
