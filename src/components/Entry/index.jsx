import "../../styles/text.css";
import "./style.css";
import "../../styles/input.css";
import "../../styles/select.css";
import { useState } from "react";

function Entry({filterMovimentacoes, movimentacoes, setMovimentacoes, setFilterMovimentacoes, setTotal}) {
  const [descricao, setDescricao] = useState("");
  const [quantia, setQuantia] = useState(0);
  const [tipo, setTipo] = useState("entrada");

  function addDescricao(valor) {
    setDescricao(valor);
  }

  function addQuantia(valor) {
    setQuantia(valor);
  }

  function addTipo(tipo) {
    setTipo(tipo);
  }

  function addMovimentacao() {
    // setMovimentacoes([...movimentacoes, [descricao,parseFloat(quantia),tipo]])
    setMovimentacoes([...movimentacoes, {desc: descricao, val: parseFloat(quantia), estilo: tipo}])
  }

  return (
    <div className="box-left">
      <div className="description">
        <label className="label-default">Descrição</label>
        <input
          value={descricao}
          onChange={(event) => addDescricao(event.target.value)}
          type="text"
          className="input-default"
          placeholder="Digite aqui sua descrição"
        />
        <p className="helper-text">Ex: Compra de roupas</p>
      </div>
      <div className="entradas">
      <div className="valor">
        <label className="label-default">Valor</label>
        <form>
          <input id='addQuantia'
            value={quantia}
            onChange={(event) => addQuantia(event.target.value)}
            type="number"
            className="input-default"
          />
          <p>R$</p>
        </form>
      </div>
      <div className="tipo">
        <label className="label-default">Tipo de Valor</label>
        <select
          onChange={(event) => addTipo(event.target.value)}
          className="select-default"
          name="entrada"
          id="entrada"
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>
      </div>
      <button onClick={addMovimentacao} className="button-primary">Inserir valor</button>
    </div>
  );
}

export default Entry;
