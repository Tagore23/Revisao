import { useEffect, useState } from "react";
import { Categoria } from "../models/categoria";
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
 font-family: Arial, sans-serif;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f0;
  }
`;

const StyledTableCell = styled.td`
  padding: 12px;
  text-align: left;
  color: black;
   font-family: Arial, sans-serif;
`;

function ListarCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    carregarCategoria();
  }, []);
  function carregarCategoria() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/categoria/listar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        console.table(categorias);
        setCategorias(categorias);
      });
  }
  return (
    <div>
      <h1>Listar Categorias</h1>
      <StyledTable>
        
        <thead>
          <tr>
            <th>Categoria Id</th>
            <th>Nome</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.categoriaId}>
              <StyledTableCell>{categoria.categoriaId}</StyledTableCell>  
              <StyledTableCell>{categoria.nome}</StyledTableCell>
              <StyledTableCell>{categoria.criadoEm}</StyledTableCell>
            </tr>
          ))}
        </tbody>
        </StyledTable>
    </div>
  );
}


export default ListarCategoria;