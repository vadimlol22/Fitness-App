import Cookies from "js-cookie";

import { mainApi } from "../config/mainApi";

class AuthService {
  async main(email, password, type) {
    try {
      const { data } = await mainApi.post(`/auth/${type}`, {
        email,
        password,
      });

      if (data.token) Cookies.set("red", data.token);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new AuthService();
