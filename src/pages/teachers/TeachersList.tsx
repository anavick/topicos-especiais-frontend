import React, { useEffect, useState } from "react";
import axios from "axios";

import { Student } from "../../types/student";
import TeacherCard from "../../components/TeacherCard/TeacherCard";

import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
} from "../../api/teachers";
import { Teacher } from "../../types/teacher";

function TeacherList() {
  const [teachers, setTeachers] = useState<Array<Student>>([]);
  const [newTeacherName, setNewTeacherName] = useState<string>("");
  const [newTeacherEmail, setNewTeacherEmail] = useState<string>("");
  const [newTeacherPassword, setNewTeacherPassword] = useState<string>("");

  const handleDeleteTeacher = async (id: number) => {
    await deleteTeacher(id);
    getTeacherList();
  };

  const getTeacherList = async () => {
    const teachers = await getAllTeachers();
    setTeachers(teachers);
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newTeacherName || !newTeacherEmail || !newTeacherPassword) {
      return alert("Um dos campos nao foi preenchido!");
    }
    await createTeacher(newTeacherName, newTeacherEmail, newTeacherPassword);
    getTeacherList();
    setNewTeacherEmail("");
    setNewTeacherName("");
    setNewTeacherPassword("");
  };

  return (
    <div>
      <h1>Professores</h1>
      <ul>
        {teachers.map((teacher: Teacher) => (
          <li key={teacher.id}>
            <TeacherCard
              teacher={teacher}
              deleteTeacher={handleDeleteTeacher}
            />
          </li>
        ))}
      </ul>

      <br />

      <h1>Cadastrar novo Professor</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome do professor:</label>
        <input
          type="text"
          placeholder="Nome do professor"
          onChange={(event) => {
            setNewTeacherName(event.target.value);
          }}
        />
        <br />
        <label>Email do professor:</label>
        <input
          type="text"
          placeholder="Email do professor"
          onChange={(event) => {
            setNewTeacherEmail(event.target.value);
          }}
        />
        <br />
        <label>Senha do professor:</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          onChange={(event) => {
            setNewTeacherPassword(event.target.value);
          }}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default TeacherList;
