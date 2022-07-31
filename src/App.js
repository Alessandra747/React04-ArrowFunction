import React, { Component } from "react";
class App extends Component {
  mensagem = () => {
    return <h2>Prática React 01 Arrow Function</h2>;
  };

  dobro = (num) => {
    return num * 2;
  };

  render() {
    return (
      <div>
        {this.mensagem()}
        {this.dobro(7)}
      </div>
    );
  }
}
export default App;
