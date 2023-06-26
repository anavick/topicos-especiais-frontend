import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import StudentsList from "./pages/students/StudentList";
import Disciplinas from "./pages/Disciplinas";
import Cursos from "./pages/Cursos";
import GetStudentById from "./pages/students/Student";
import TeacherList from "./pages/teachers/TeachersList";
import GetTeacherById from "./pages/teachers/Teacher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/alunos",
    element: <StudentsList />,
  },
  {
    path: "/alunos/:id",
    element: <GetStudentById />,
  },
  {
    path: "/disciplinas",
    element: <Disciplinas />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/professores",
    element: <TeacherList />,
  },
  {
    path: "/professores/:id",
    element: <GetTeacherById />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
