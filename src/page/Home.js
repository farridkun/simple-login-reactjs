import React from 'react';
import Cookies from 'js-cookie';
import { checkLogin, checkAdmin } from '../Helper';

const Home = () => {
  const username = Cookies.get('username');
  const renderMsg = () => {
    if (!checkLogin()) {
      return <p>Belum Login!</p>;
    } else {
      return <p>Sudah Login!</p>;
    }
  };

  const renderStatus = () => {
    if (checkAdmin()) {
      return <p>Ini Admin</p>;
    } else {
      return <p>Ini Bukan Admin</p>;
    }
  };

  const renderFormReview = () => {
    return (
      <>
        <p>Ini adalah Form Review</p>
        <p>Silahkan di isi dengan jujur ya!</p>
      </>
    );
  };

  return (
    <>
      <h3>Home</h3>

      {renderMsg()}
      {checkLogin() && renderStatus()}
      {checkLogin() && <b>{username}</b>}
      {checkLogin() && renderFormReview()}
    </>
  );
};

export default Home;
