import Cookies from 'js-cookie';

export function checkLogin() {
  if (typeof Cookies.get('token') === 'undefined') {
    // console.log("Belum Login");
    return false;
  } else {
    // console.log("Sudah Login");
    return true;
  }
}

export function checkAdmin() {
  if (typeof Cookies.get('role') === 'admin') {
    // console.log("Bukan Admin");
    return false;
  } else {
    // console.log("Admin");
    return true;
  }
}
