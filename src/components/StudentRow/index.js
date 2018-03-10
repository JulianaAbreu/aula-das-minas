import React, { Component } from "react";
import "./style.css";

class StudentRow extends Component {
  onClick = (ev) => {
      const { deleteByIndex } = this.props;
      ev.preventDefault();
      deleteByIndex(this.props.index);   
  }
  render() {
    return (
      <tr>
        <td>{this.props.nome}</td>
        <td>{this.props.matricula}</td>
        <td>{this.props.serie}</td>
        <td>{this.props.rg}</td>
        <td>
          <button onClick={this.onClick}>×</button>
        </td>
      </tr>
    );
  }
}

export default StudentRow;
