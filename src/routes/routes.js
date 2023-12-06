import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import NewExercise from "../components/screens/new-exercise/NewExercise";
import NewWorkout from "../components/screens/new-workout/NewWorkout";
import Profile from "../components/screens/profile/Profile";
import ListWorkouts from "../components/screens/workouts/list/ListWorkouts";
import Workout from "../components/screens/workouts/detail/Workout";
import ExerciseLog from "../components/screens/exerciseLog/ExerciseLog";

export const routes = [
  {
    path: "/",
    component: Home,
    isAuth: true,
  },
  {
    path: "/auth",
    component: Auth,
    isAuth: false,
  },
  {
    path: "/new-workout",
    component: NewWorkout,
    isAuth: true,
  },
  {
    path: "/profile",
    component: Profile,
    isAuth: true,
  },
  {
    path: "/new-exercise",
    component: NewExercise,
    isAuth: true,
  },

  {
    path: "/workout/:id",
    component: Workout,
    isAuth: true,
  },
  {
    path: "/workouts",
    component: ListWorkouts,
    isAuth: true,
  },

  {
    path: "/exercise/:id",
    component: ExerciseLog,
    isAuth: true,
  },
  ,
];
