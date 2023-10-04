import decode from "jwt-decode";

class AuthService {
  getProfile() {
    const data: any = this.getToken();
    return decode(data);
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: any) {
    try {
      const decoded: any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("id_token");
        window.location.assign("/");
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(token: any) {
    localStorage.setItem("id_token", token);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
