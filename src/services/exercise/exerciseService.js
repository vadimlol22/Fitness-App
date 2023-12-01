import { mainApi } from "../../config/mainApi";

class ExerciseService {
  async getAll() {
    return mainApi.get(`/exercises`);
  }

  async create(body) {
    return mainApi.post(`/exercises`, body);
  }

  async update(id, body) {
    return mainApi.put(`/exercises/${id}`, body);
  }

  async delete(id) {
    return mainApi.delete(`/exercises/${id}`);
  }
}

export default new ExerciseService();
