import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";
import axios from "axios";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #399;
  margin-right: 15px;
  font-weight: bold;

  &:hover {
    color: blue;
  }
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f9;
  }
`;

const StyledTableCell = styled.td`
  padding: 12px;
  text-align: left;
`;

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  function alterar(id: string) {
    console.log(`Id: ${id}`);
    axios
      .put(`http://localhost:5000/tarefas/alterar/${id}`)
      .then((resposta) => {
        setTarefas(resposta.data);
      });
  }

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <StyledTable>
        
        <thead>
          <tr>
            <th>#</th>
            <th>Títulos</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado Em</th>
            <th>Alterar Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <StyledTableCell>{tarefa.tarefaId}</StyledTableCell>
              <StyledTableCell>{tarefa.titulo}</StyledTableCell>
              <StyledTableCell>{tarefa.descricao}</StyledTableCell>
              <StyledTableCell>{tarefa.status}</StyledTableCell>
              <StyledTableCell>{tarefa.criadoEm}</StyledTableCell>
              <StyledTableCell>
                <button
                  onClick={() => {
                    alterar(tarefa.tarefaId!);
                  }}
                >
                  Alterar
                </button>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
        </StyledTable>
    </div>
  );
}

export default ListarTarefas;