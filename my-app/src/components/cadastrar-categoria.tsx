import { useEffect, useState } from "react";
import { Categoria } from "../models/categoria";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Button = styled.button`
  background: black;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

function CadastrarCategoria() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [categorias, setCategorias] = useState<Categoria[]>([]);


    function cadastrarCategoria(e: any) {
        const categoria: Categoria = {
            nome: nome,
        };
    
        //FETCH ou AXIOS
        fetch("http://localhost:5000/categoria/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoria),
        })
          .then((resposta) => resposta.json())
          .then((tarefa: Categoria) => {
            navigate("/pages/categoria/listar");
          });
        e.preventDefault();
      }
      return (
        <div>
          <h1>Cadastrar Categoria</h1>
          <form onSubmit={cadastrarCategoria}>
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite o título"
              onChange={(e: any) => setNome(e.target.value)}
              required
            />
            <br />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      );
    
}

export default CadastrarCategoria;