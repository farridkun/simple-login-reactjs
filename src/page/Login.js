import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { checkLogin } from '../Helper';
import axios from 'axios';

const Login = (props) => {
  let history = useHistory();

  // const url = 'https://team-c-be-binar8.nandaworks.com/auth/login';
  const url = 'https://5fa178342541640016b6b13b.mockapi.io/api/v1/login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password
    };
    axios.post(url, data).then((res) => {
      console.log(res.data);
      const { username, role, token } = res.data;
      Cookies.set('username', username, { expires: 1 });
      Cookies.set('role', role, { expires: 1 });
      Cookies.set('token', token, { expires: 1 });
      history.push('/');
    });
    // jika di klik login, set cookies token
    // Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
    // history.push("/");
  };

  const handleLogout = () => {
    // jika di klik logout, remove cookies token
    Cookies.remove('token');
    history.push('/');
  };

  const renderBtn = () => {
    if (!checkLogin()) {
      // return <button onClick={handleLogin}>Login!</button>;
      return (
        <>
          <form onSubmit={handleLogin}>
            Username: <br />
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <br />
            Password: <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
        </>
      );
    } else {
      return <button onClick={handleLogout}>Logout!</button>;
    }
  };

  return (
    <>
      <h3>Login</h3>
      {renderBtn()}
    </>
  );
};

export default Login;
