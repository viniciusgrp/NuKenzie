import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Index from "./components/Index";
import List from './components/List'
import "./styles/buttons.css";
import "./styles/input.css";
import "./styles/text.css";
import './styles/index.css'
import {useState } from "react";
import Total from "./components/Total";

function App() {
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [filterMovimentacoes, setFilterMovimentacoes] = useState('')
  const [page, setPage] = useState('landing')
  const [total, setTotal] = useState(() => {
    if (movimentacoes.length > 0) {
        const valor = movimentacoes.reduce((acc, act) => act[1] += acc, 0)
    return valor
    } else {
        return 0
    }
})

  return page == 'landing' ? (
      <Index setPage={setPage}></Index>
  ) : (
    <>
      <Header setPage={setPage}/>
      <div className="containerHome">
        <div className="esquerda">
        <Entry filterMovimentacoes={filterMovimentacoes} movimentacoes={movimentacoes} setMovimentacoes={setMovimentacoes} setFilterMovimentacoes={setFilterMovimentacoes} setTotal={setTotal}/>
        <Total movimentacoes={movimentacoes} total={total} setTotal={setTotal} />
        </div>
        <List filterMovimentacoes={filterMovimentacoes} movimentacoes={movimentacoes} setMovimentacoes={setMovimentacoes} setFilterMovimentacoes={setFilterMovimentacoes}/>
      </div>
    </>
  );
}

export default App;
