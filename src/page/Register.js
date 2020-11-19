import React, { useState } from 'react';
import axios from 'axios';
// import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Register = () => {
  // const url = 'https://5fa178342541640016b6b13b.mockapi.io/api/v1/login';
  const url = 'https://team-c-be-binar8.nandaworks.com/auth/register';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  // const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    // setLoading(true);

    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthDate: birthDate,
      gender: gender,
      username: username,
      password: password,
      role: role
    };

    axios.post(url, body).then((res) => {
      console.log(res.data);
      // const { username, email, password, role } = res.data;
      // Cookies.set('username', username, { expires: 1 });
      // Cookies.set('email', email, { expires: 1 });
      // Cookies.set('role', role, { expires: 1 });
      history.push('/login');
      // setLoading(false);
    });
  };

  // if (loading) {
  //   return (
  //     <div>
  //       {/* <Row className="justify-content-center mt-5"> */}
  //       {/* <Spinner type="grow" color="primary" /> */}
  //       {/* </Row> */}
  //       {/* <Row className="justify-content-center mt-3 font-weight-bold"> */}
  //       Sedang memuat data...
  //       {/* </Row> */}
  //     </div>
  //   );
  // }

  return (
    <>
      <form onSubmit={handleRegister}>
        <label>FirstName</label> <br />
        <input
          type="text"
          placeholder="firstName you need register"
          autoComplete="new-text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>lastName</label> <br />
        <input
          type="text"
          placeholder="lastName you need register"
          autoComplete="new-text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label>Email</label> <br />
        <input
          type="email"
          placeholder="email you need register"
          autoComplete="new-text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Birth Date</label> <br />
        <input
          // type="date"
          // min="1980-11-11"
          // max="2020-11-11"
          type="text"
          placeholder="yyyy-mm-dd"
          autoComplete="new-text"
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <br />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="0">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Username</label> <br />
        <input
          type="text"
          placeholder="username you need register"
          autoComplete="new-text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label> <br />
        <input
          type="password"
          placeholder="password you need register"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="0">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
