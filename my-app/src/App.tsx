import React from "react";
import ListarTarefas from "./components/listar-tarefa";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CadastrarTarefa from "./components/cadastrar-tarefa";
import ListarTarefasConcluidas from "./components/listar-concluidas-tarefa";
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #399;
  margin-right: 15px;
  font-weight: bold;

  &:hover {
    color: blue;
  }
`;


// Componente estilizado para o conteúdo principal
const MainContent = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <StyledNavLink to={"/"}>Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={"/pages/tarefa/listar"}>
                  Listar Tarefas{" "}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={"/pages/tarefa/listarconcluidas"}>
                  Listar Tarefas Concluídas{" "}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={"/pages/tarefa/listarnaoconcluidas"}>
                  Listar Tarefas Não Concluídas{" "}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={"/pages/tarefa/cadastrar"}>
                  Cadastrar Tarefa{" "}
                </StyledNavLink>
              </li>
            </ul>
          </nav>
          <MainContent>
          <Routes>
            <Route path="/" element={<ListarTarefas />} />
            <Route
              path="/pages/tarefa/listar"
              element={<ListarTarefas />}
            />
            <Route
              path="/pages/tarefa/listarconcluidas"
              element={<ListarTarefasConcluidas />}
            />
            <Route
              path="/pages/tarefa/listarnaoconcluidas"
              element={<ListarTarefasConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<CadastrarTarefa />}
            />
          </Routes>
          <footer>
            <p>Desenvolvido por Tagore Nataniel de Lara</p>
          </footer>
          </MainContent>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;