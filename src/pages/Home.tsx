import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`alunos`}>Cadastro/Listagem de Alunos</Link>
            </li>
            <li>
              <Link to={`professores`}>Cadastro/Listagem de Professores</Link>
            </li>
            <li>
              <Link to={`disciplinas`}>Cadastro/Listagem de Disciplinas</Link>
            </li>
            <li>
              <Link to={`cursos`}>Cadastro/Listagem de Cursos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}