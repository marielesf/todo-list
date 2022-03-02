import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import bloco from "./bloco.png";

const GlobalStyle = createGlobalStyle`
body{
  padding: 0%;
  margin: 0%
  box-sizing: 0%;
  text-align:center;
  background-position-x: center;
  background-image: url(${bloco});
  background-repeat: no-repeat;
}

.fundoDeApresentacao{
  padding-top: 200px;
}

li{
  list-style-type: none;
  text-align:left;
  margin-left: 40%
}

`;
//const sempre inicia maiuscula
const Title1 = styled.h1`
  color: red;
`;
class Todo extends Component {
  state = {
    tarefa: "",
    lista: [],
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value,
    });
  };

  add = () => {
    // if (this.state.tarefa != ""){
    //   this.setState({ lista: this.state.lista.concat({
    //     tarefa: this.state.tarefa
    //   }),
    // tarefa = ""})
    // }
    let { lista, tarefa } = this.state;
    if (tarefa != "")
      this.setState({
        tarefa: "",
        //O concat cria uma nova lista juntando os elementos sem eles se perderem
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now(), //criar um identificador unico em milisegundos
        }),
      });
  };

  remove = (id) => {
    let { lista } = this.state;
    this.setState({
      lista: lista.filter((item) => {
        return item.id != id;
      }),
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        {/* Foi utilizado a tag <form> </form> para que seja possível a criação da
        tarefa ao pressionar a tecla Enter do teclado. */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.add();
          }}
        >
          {/* Na função submit é chamado o evento “preventDefault” que impede a
          página ser recarregada após o envio do form. */}
          <div className="fundoDeApresentacao">
            <Title1>React App Todo List</Title1>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.tarefa}
            />
            <button>Add</button>
            <div>
              {this.state.lista.map((item) => (
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        this.remove(item.id);
                      }}
                    >
                      x
                    </button>
                    {item.tarefa}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Todo;
