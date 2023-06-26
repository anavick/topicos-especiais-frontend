import StudentCard from "../../components/StudentCard/StudentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Student } from "../../types/student";
import { getStudentById } from "../../api/students";

export default function GetStudentById() {
  const { id } = useParams();
  const [student, setStudent] = useState<Student>({} as Student);

  const getStudent = async () => {
    if (id) {
      const student = await getStudentById(parseInt(id));
      setStudent(student);
    } else {
      alert("Houve um erro ao recuperar o estudante");
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <Link to={"/alunos"}>Voltar para listagem</Link>
      <h3>NOME - {student.name}</h3>
      <h3>EMAIL - {student.email}</h3>
    </div>
  );
}
