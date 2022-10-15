import './style.css'

function Card({ movimentacoes, filterMovimentacoes, setMovimentacoes }) {
  function removeMovimentacao (id) {
    setMovimentacoes(movimentacoes.filter((elem) => elem != filtered[id]))
  }

  const filtered = movimentacoes.filter((elem) => elem.estilo.includes(filterMovimentacoes))

  return filterMovimentacoes.length ? filtered.map((elem, index) => {
    return (
        
      <div key={index} className="card 1">
        <div className={elem.estilo === 'entrada' ? 'entry' : 'exit'}></div>
        <div className="card-text">
          <h3 className="title-3">{elem.desc}</h3>
          <p>{elem.estilo}</p>
        </div>
        <div className="card-value">
          <p>R$ {elem.val}</p>
        </div>
        <div className="card-trash">
          <button onClick={(event) => removeMovimentacao(event.target.id)} id={index} className="button-trash"></button>
        </div>
      </div>
    );
  }) : movimentacoes.map((elem, index) => {
    return (
        
      <div key={index} className="card 1">
        <div className={elem.estilo === 'entrada' ? 'entry' : 'exit'}></div>
        <div className="card-text">
          <h3 className="title-3">{elem.desc}</h3>
          <p>{elem.estilo}</p>
        </div>
        <div className="card-value">
          <p>R$ {elem.val}</p>
        </div>
        <div className="card-trash">
          <button onClick={(event) => removeMovimentacao(event.target.id)} id={index} className="button-trash"></button>
        </div>
      </div>
    );
  })
}

export default Card