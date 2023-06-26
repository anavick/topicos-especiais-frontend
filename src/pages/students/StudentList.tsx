import React, { useEffect, useState } from "react";
import axios from "axios";

import { Student } from "../../types/student";
import StudentCard from "../../components/StudentCard/StudentCard";

import {
  createStudent,
  deleteStudent,
  getAllStudents,
} from "../../api/students";

function StudentList() {
  const [alunos, setAlunos] = useState<Array<Student>>([]);
  const [newStudentName, setNewStudentName] = useState<string>("");
  const [newStudentEmail, setNewStudentEmail] = useState<string>("");
  const [newStudentPassword, setNewStudentPassword] = useState<string>("");

  const handleDeleteStudent = async (id: number) => {
    await deleteStudent(id);
    getStudentList();
  };

  const getStudentList = async () => {
    const students = await getAllStudents();
    setAlunos(students);
  };

  useEffect(() => {
    getStudentList();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newStudentName || !newStudentEmail || !newStudentPassword) {
      return alert("Um dos campos nao foi preenchido!");
    }
    await createStudent(newStudentName, newStudentEmail, newStudentPassword);
    getStudentList();
    setNewStudentEmail("");
    setNewStudentName("");
    setNewStudentPassword("");
  };

  return (
    <div>
      <h1>Alunos</h1>
      <ul>
        {alunos.map((aluno: Student) => (
          <li key={aluno.id}>
            <StudentCard student={aluno} deleteStudent={handleDeleteStudent} />
          </li>
        ))}
      </ul>

      <br />

      <h1>Cadastrar novo Aluno</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome do aluno:</label>
        <input
          type="text"
          placeholder="Nome do aluno"
          onChange={(event) => {
            setNewStudentName(event.target.value);
          }}
        />
        <br />
        <label>Email do aluno:</label>
        <input
          type="text"
          placeholder="Email do aluno"
          onChange={(event) => {
            setNewStudentEmail(event.target.value);
          }}
        />
        <br />
        <label>Senha do aluno:</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          onChange={(event) => {
            setNewStudentPassword(event.target.value);
          }}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default StudentList;
