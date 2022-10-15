import './style.css'

function Total ({movimentacoes, setTotal}) {
    let total = 0
    movimentacoes.forEach((elem) => elem.estilo === 'entrada' ? total += elem.val : total -= elem.val)
    
    return (
        <>
        <div className="total">
            <h3 className="title-3">Valor total:</h3>
            <span className="text-total">R$ {total}</span>
        </div>
        <p className='infoTotal'>O valor se refere ao saldo</p>
        </>
    )
}

export default Total