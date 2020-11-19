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

  const renderAdmin = () => {
    if (!checkAdmin()) {
      return <p>Sebagai User!</p>;
    } else {
      return <p>Sebagai Admin!</p>;
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
      {checkLogin() && (
        <p>
          Hi, <b>{username}</b>
        </p>
      )}
      {checkLogin() && renderAdmin()}
      {checkLogin() && renderFormReview()}
    </>
  );
};

export default Home;
