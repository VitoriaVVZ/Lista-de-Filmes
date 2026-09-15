import { useState } from 'react';
import Filme from './components/Filme';
import './App.css';

export default function App() {

  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Sonic: O Filme', genero: 'infantil/comédia', ano: 2020, assistido: true },
    { id: 2, titulo: 'It: A Coisa', genero: 'terror', ano: 2017, assistido: false },
    { id: 3, titulo: 'Interstellar', genero: 'ficção', ano: 2014, assistido: true },
    { id: 4, titulo: 'Vingadores: Ultimato', genero: 'ação', ano: 2019, assistido: false },
  ]);

  const alternarStatus = (id) => {
    setFilmes(
      filmes.map((filme) =>
        filme.id === id ? { ...filme, assistido: !filme.assistido } : filme
      )
    );
  };

  const total = filmes.length;
  const assistidos = filmes.filter((f) => f.assistido).length;
  const pendentes = total - assistidos;

  return (
    <div className="container">
      <header className="header">
        <h1>Minha Lista de Filmes</h1>

        <div className="contadores">
          <div className="contador-card">
            <span>Total</span>
            <strong>{total}</strong>
          </div>
          <div className="contador-card assistidos">
            <span>Assistidos</span>
            <strong>{assistidos}</strong>
          </div>
          <div className="contador-card pendentes">
            <span>Pendentes</span>
            <strong>{pendentes}</strong>
          </div>
        </div>
      </header>

      <main className="grid-filmes">
        {filmes.map((filme) => (
          <Filme
            key={filme.id}
            id={filme.id}
            titulo={filme.titulo}
            genero={filme.genero}
            ano={filme.ano}
            assistido={filme.assistido}
            alternarStatus={alternarStatus}
          />
        ))}
      </main>
    </div>
  );
}
