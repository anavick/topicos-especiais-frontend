import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Teacher } from "../../types/teacher";
import { getTeacherById } from "../../api/teachers";

export default function GetTeacherById() {
  const { id } = useParams();
  const [teacher, setStudent] = useState<Teacher>({} as Teacher);

  const getStudent = async () => {
    if (id) {
      const teacher = await getTeacherById(parseInt(id));
      setStudent(teacher);
    } else {
      alert("Houve um erro ao recuperar o professor");
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <Link to={"/professores"}>Voltar para listagem</Link>
      <h3>NOME - {teacher.name}</h3>
      <h3>EMAIL - {teacher.email}</h3>
    </div>
  );
}
