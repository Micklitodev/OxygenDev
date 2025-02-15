import { Token } from "@/lib/types";
import Cookie from "js-cookie";
import decode from "jwt-decode";

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? decode(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  // isTokenExpired(token: string) {
  //   try {
  //     const decoded: any = decode(token as string);
  //     console.log(Date.now() / 1000);
  //     if (decoded.exp < Date.now() / 1000) {
  //       Cookie.remove("token");
  //       return true;
  //     } else return false;
  //   } catch (err) {
  //     return false;
  //   }
  // }

  getToken() {
    return Cookie.get("token");
  }

  login(token: Token) {
    Cookie.set("token", token, { expires: 7, sameSite: "Lax" });
    window.location.assign("/");
  }

  logout() {
    Cookie.remove("token");
    window.location.assign("/");
  }
}

export default new AuthService();
