import HomePage from "./HomePage";
import TodosPage from "./TodosPage";
import PageNotFound from "./PageNotFound";
import AllTodos from "./AllTodos";
export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "todos/:id",
    component: TodosPage,
  },
  {
    path: "all-todos",
    component: AllTodos,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
