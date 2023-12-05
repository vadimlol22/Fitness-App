import { mainApi } from "../../config/mainApi";

class WorkoutLogService {
  async getById(id) {
    return mainApi.get(`/workouts/log/${id}`);
  }

  async create(workoutId) {
    return mainApi.post(`/workouts/log/${workoutId}`);
  }

  async complete(id) {
    return mainApi.patch(`/workouts/log/complete/${id}`);
  }
}

export default new WorkoutLogService();
