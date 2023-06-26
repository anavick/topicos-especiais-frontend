import { Student } from "../../types/student";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { updateStudent } from "../../api/students";

type StudentCardProps = {
  student: Student;
  deleteStudent: (id: number) => void;
};

export default function StudentCard({
  student,
  deleteStudent,
}: StudentCardProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newStudentName, setNewStudentName] = useState<string>(student.name);
  const [newStudentEmail, setNewStudentEmail] = useState<string>(student.email);
  const [newStudentPassword, setNewStudentPassword] = useState<string>("");

  const handleUpdateStudent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateStudent(
      newStudentName,
      newStudentEmail,
      newStudentPassword,
      student.id
    );
  };

  return (
    <>
      <div>
        <Link to={`/alunos/${student.id}`}>ID {student.id}</Link>-{" "}
        {student.name} - {student.email} -
        <button onClick={() => deleteStudent(student.id)}>DELETE</button> -
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
          <form onSubmit={handleUpdateStudent}>
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
              placeholder="Insira nova senha"
              onChange={(event) => {
                setNewStudentPassword(event.target.value);
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
