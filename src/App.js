import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0%;
  margin: 0%
  box-sizing: 0%;
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
        <div>
          <GlobalStyle />
          <Title1>React App Todo List</Title1>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.tarefa}
          />
          <button onClick={this.add}>Add</button>
          <div>
            {this.state.lista.map((item) => (
              <ul>
                <li>
                  {item.tarefa}
                  <button
                    onClick={() => {
                      this.remove(item.id);
                    }}
                  >
                    x
                  </button>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
