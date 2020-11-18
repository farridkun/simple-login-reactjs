import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  let history = useHistory();
  Cookies.remove('token');
  Cookies.remove('username');
  Cookies.remove('role');
  history.push('/');
  return null;
};

export default Logout;
