import { mainApi } from "../../config/mainApi";

class WorkoutService {
  async getAll() {
    return mainApi.get(`/workouts`);
  }

  async getById(id) {
    return mainApi.get(`/workouts/${id}`);
  }

  async create(body) {
    return mainApi.post(`/workouts`, body);
  }

  async update(id, body) {
    return mainApi.put(`/workouts/${id}`, body);
  }

  async delete(id) {
    return mainApi.delete(`/workouts/${id}`);
  }
}

export default new WorkoutService();
