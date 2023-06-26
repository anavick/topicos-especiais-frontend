import { Student } from "../../types/student";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Teacher } from "../../types/teacher";
import { updateTeacher } from "../../api/teachers";

type TeacherCardProps = {
  teacher: Teacher;
  deleteTeacher: (id: number) => void;
};

export default function TeacherCard({
  teacher,
  deleteTeacher,
}: TeacherCardProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTeacherName, setNewTeacherName] = useState<string>(teacher.name);
  const [newTeacherEmail, setNewTeacherEmail] = useState<string>(teacher.email);
  const [newTeacherPassword, setNewTeacherPassword] = useState<string>("");

  const handleUpdateTeacher = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTeacher(
      newTeacherName,
      newTeacherEmail,
      newTeacherPassword,
      teacher.id
    );
  };

  return (
    <>
      <div>
        <Link to={`/professores/${teacher.id}`}>ID {teacher.id}</Link>-{" "}
        {teacher.name} - {teacher.email} -
        <button onClick={() => deleteTeacher(teacher.id)}>DELETE</button> -
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          EDITAR
        </button>
      </div>
      {isEditing && (
        <div>
          Formulario de ediçao
          <form onSubmit={handleUpdateTeacher}>
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
              placeholder="Insira nova senha"
              onChange={(event) => {
                setNewTeacherPassword(event.target.value);
              }}
            />
            <br />
            <button type="submit">EDITAR</button>
          </form>
        </div>
      )}
    </>
  );
}
