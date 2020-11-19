import React from 'react';
import Cookies from 'js-cookie';
import { checkAdmin, checkLogin } from '../Helper';

const Admin = () => {
  const username = Cookies.get('username');

  const renderMsg = () => {
    if (!checkLogin()) {
      return <p>Anda belum login!</p>;
    } else {
      return <p>Sudah Login</p>;
    }
  };

  const renderAdmin = () => {
    if (!checkAdmin()) {
      return <p>Maaf anda hanya user!</p>;
    } else {
      return (
        <>
          <h1>Selamat datang Admin</h1>
          <code>username anda adalah {username}</code>
        </>
      );
    }
  };

  return (
    <>
      <h3>Admin Page</h3>
      {renderMsg()}
      {checkLogin() && renderAdmin()}
    </>
  );
};

export default Admin;
