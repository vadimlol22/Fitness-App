import { mainApi } from "../config/mainApi";

class UserService {
  async getProfile() {
    return await mainApi.get(`/users/profile`);
  }
}

export default new UserService();
