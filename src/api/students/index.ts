import axios from "axios";
import { Student } from "../../types/student";

export const getAllStudents = async (): Promise<Student[]> => {
  return axios
    .get("http://localhost:3000/student/listar")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getStudentById = async (id: number): Promise<Student> => {
  return axios
    .get(`http://localhost:3000/student/${id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteStudent = async (id: number): Promise<void> => {
  return axios
    .delete(`http://localhost:3000/student/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createStudent = async (
  name: string,
  email: string,
  password: string
) => {
  return axios
    .post("http://localhost:3000/student/create", {
      name,
      email,
      password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      alert("Houve um erro ao cadastrar!");
    });
};

export const updateStudent = async (
  name: string,
  email: string,
  password: string,
  id: number
) => {
  return axios
    .put(`http://localhost:3000/student/${id}`, {
      name,
      email,
      password,
    })
    .then(function (response) {
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
      alert("Houve um erro ao atualizar o aluno!");
    });
};
