import './style.css'
import Card from '../Card'
import noCard from '../../img/NoCard.png'

function List({filterMovimentacoes, movimentacoes, setMovimentacoes, setFilterMovimentacoes}) {

  function setFilter (tipo) {
    setFilterMovimentacoes(tipo)
  }


  return (
    <div className='box-right'>
      <div className="divHeader">
        <h3 className="title-3">Resumo financeiro</h3>
        <div className="buttons">
          <button onClick={(event) => setFilter(event.target.value)} value='' className="button-primary">Todos</button>
          <button onClick={(event) => setFilter(event.target.value)} value='entrada' className="button-grey">Entradas</button>
          <button onClick={(event) => setFilter(event.target.value)} value='saida' className="button-grey">Despesas</button>
        </div>
      </div>
      <div className="div-cards">
        {movimentacoes.length ? <Card movimentacoes={movimentacoes} filterMovimentacoes={filterMovimentacoes} setMovimentacoes={setMovimentacoes}/> : 
        <div className='cardDiv'>
          <h3 id='semLancamento' className='title-3'>Você ainda não possui nenhum lançamento</h3>
          <img src={noCard} alt="" className="noCard" />
          <img src={noCard} alt="" className="noCard" />
          <img src={noCard} alt="" className="noCard" />
        </div>}
      </div>
{/*       
      <div className="card 1">
        <div className="entry"></div>
        <div className="card-text">
                <h3 className="title-3">Salário - Mês Dezembro</h3>
                <p>Entrada</p>
        </div>
        <div className="card-value">
            <p>R$3.250,00</p>
        </div>
        <div className="card-trash">
        <button className='button-trash'></button>
        </div>
      </div>
      <div className="card 1">
        <div className="entry"></div>
        <div className="card-text">
                <h3 className="title-3">Salário - Mês Dezembro</h3>
                <p>Entrada</p>
        </div>
        <div className="card-value">
            <p>R$3.250,00</p>
        </div>
        <div className="card-trash">
        <button className='button-trash'></button>
        </div>
      </div>
      <div className="card 1">
        <div className="entry"></div>
        <div className="card-text">
                <h3 className="title-3">Salário - Mês Dezembro</h3>
                <p>Entrada</p>
        </div>
        <div className="card-value">
            <p>R$3.250,00</p>
        </div>
        <div className="card-trash">
        <button className='button-trash'></button>
        </div>
      </div>
      <div className="card 1">
        <div className="entry"></div>
        <div className="card-text">
                <h3 className="title-3">Salário - Mês Dezembro</h3>
                <p>Entrada</p>
        </div>
        <div className="card-value">
            <p>R$3.250,00</p>
        </div>
        <div className="card-trash">
        <button className='button-trash'></button>
        </div>
      </div> */}
    </div>
  );
}

export default List;
