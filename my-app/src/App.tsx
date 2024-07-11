import React from "react";
import ListarTarefas from "./components/listar-tarefa";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CadastrarTarefa from "./components/cadastrar-tarefa";
import ListarTarefasConcluidas from "./components/listar-concluidas-tarefa";
import styled, { createGlobalStyle } from "styled-components";
import ListarTarefasNaoConcluidas from "./components/listar-nao-concluidas-tarefa";
import ListarCategoria from "./components/listar-categoria";
import CadastrarCategoria from "./components/cadastrar-categoria";

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 15px;
  font-weight: bold;
 font-family: Arial, sans-serif;
  &:hover {
    color: #123;
  }
`;
const PageContainer = styled.div`
  background-color: #343541; 
  color: white;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


// Componente estilizado para o conteúdo principal
const MainContent = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  color: black;
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <PageContainer>
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
              <li>
                <StyledNavLink to={"/pages/categoria/listar"}>
                  Listar Categorias{" "}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={"/pages/categoria/cadastrar"}>
                  Cadastrar Categorias{" "}
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
              element={<ListarTarefasNaoConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<CadastrarTarefa />}
            />
            <Route
              path="/pages/categoria/listar"
              element={<ListarCategoria/>}
            />
             <Route
              path="/pages/categoria/cadastrar"
              element={<CadastrarCategoria/>}
            />
          </Routes>
          <footer>
            <p>Desenvolvido por Tagore Nataniel de Lara</p>
          </footer>
          </MainContent>
        </BrowserRouter>
      </div>
      </PageContainer>
    </div>
  );
}

export default App;