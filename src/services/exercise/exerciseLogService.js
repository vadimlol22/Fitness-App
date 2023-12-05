import { mainApi } from "../../config/mainApi";

class ExerciseLogService {
  async getById(id) {
    return mainApi.get(`/exercises/log/${id}`);
  }

  async create(exerciseId) {
    return mainApi.post(`/exercises/log/${exerciseId}`);
  }

  async updateTime(timeId, body) {
    return mainApi.put(`/exercises/log/time/${timeId}`, body);
  }

  async complete(id, body) {
    return mainApi.patch(`/exercises/log/complete/${id}`, body);
  }
}

export default new ExerciseLogService();
