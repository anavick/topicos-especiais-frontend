import axios from "axios";
import { Teacher } from "../../types/teacher";

export const getAllTeachers = async (): Promise<Teacher[]> => {
  return axios
    .get("http://localhost:3000/teacher/listar")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getTeacherById = async (id: number): Promise<Teacher> => {
  return axios
    .get(`http://localhost:3000/teacher/${id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteTeacher = async (id: number): Promise<void> => {
  return axios
    .delete(`http://localhost:3000/teacher/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createTeacher = async (
  name: string,
  email: string,
  password: string
) => {
  return axios
    .post("http://localhost:3000/teacher/create", {
      name: name,
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      alert("Houve um erro ao cadastrar!");
    });
};

export const updateTeacher = async (
  name: string,
  email: string,
  password: string,
  id: number
) => {
  return axios
    .put(`http://localhost:3000/teacher/${id}`, {
      name,
      email,
      password,
    })
    .then(function (response) {
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
      alert("Houve um erro ao atualizar o professor!");
    });
};
