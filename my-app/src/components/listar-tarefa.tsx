import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";
import { Categoria } from "../models/categoria";
import axios from "axios";
import { styled } from "styled-components";
import { Link } from "react-router-dom";



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
    background-color: #123;
  }
`;
const StyledButton = styled.button`
  background-color: #123; 
  color: black; 
  padding: 10px 20px; 
  border: none; 

  font-size: 16px;
  cursor: pointer; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #123; 
  }
`;

const StyledTableCell = styled.td`
  padding: 12px;
  text-align: left;
  font-family: Arial, sans-serif;
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
            <th>Categoria</th>
            <th>Status</th>
            <th>Criado Em</th>
            <th>Alterar Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa, categoria) => (
            <tr key={tarefa.tarefaId}>
              <StyledTableCell>{tarefa.tarefaId}</StyledTableCell>
              <StyledTableCell>{tarefa.titulo}</StyledTableCell>
              <StyledTableCell>{tarefa.descricao}</StyledTableCell>
              <StyledTableCell>{tarefa.categoriaId}</StyledTableCell>
              <StyledTableCell>{tarefa.status}</StyledTableCell>
              <StyledTableCell>{tarefa.criadoEm}</StyledTableCell>
              <StyledTableCell>
              <StyledButton onClick={() => {
                    alterar(tarefa.tarefaId!);
                  }}
                >
                  
                  Alterar
                  </StyledButton>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
        </StyledTable>
    </div>
  );
}

export default ListarTarefas;