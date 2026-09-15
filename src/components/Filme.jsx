import './Filme.css';

function Filme({ id, titulo, genero, ano, assistido, alternarStatus }) {
  return (
    <div className={`card-filme ${assistido ? 'assistido' : 'pendente'}`}>
      <div className="card-header">
        <h3>{titulo}</h3>
        <span className="badge-genero">{genero}</span>
      </div>

      <div className="card-body">
        <p><strong>Ano:</strong> {ano}</p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={`status-tag ${assistido ? 'text-assistido' : 'text-pendente'}`}>
            {assistido ? 'Já assisti' : 'Ainda não assisti'}
          </span>
        </p>
      </div>

      <button
        className={`btn-status ${assistido ? 'btn-pendente' : 'btn-assistido'}`}
        onClick={() => alternarStatus(id)}
      >
        {assistido ? 'Marcar como Não Assisti' : 'Marcar como Já Assisti'}
      </button>
    </div>
  );
}

export default Filme;