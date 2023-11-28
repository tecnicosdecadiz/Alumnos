import { useEffect, useState } from 'react';
import AddAlumn from './AddAlumn';
import AlumnTable from './AlumnTable';

export default function Home() {
  const [alumns, setAlumns] = useState([]);

  useEffect(() => {
    try {
      const storedAlumnsString = localStorage.getItem('alumns');
      console.log(storedAlumnsString);

      if (storedAlumnsString) {
        const storedAlumns = JSON.parse(storedAlumnsString);
        setAlumns(storedAlumns);
      } else {
        setAlumns([]);
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setAlumns([]); // Si hay algún error al analizar el JSON, establece alumns como un array vacío
    }
  }, []);

  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem('alumns')))
  //   let storedAlumns = JSON.parse(localStorage.getItem('alumns')) || [];
  //   setAlumns(storedAlumns);
  // }, []);

  return (
    <div className="container mt-5">
      <AddAlumn alumns={alumns} onAddAlumns={(values) => setAlumns(values)} />

      <button
        onClick={() => localStorage.setItem('alumns', JSON.stringify([]))}
      >
        Reset
      </button>
      <button onClick={() => console.log(alumns)}>mostrar</button>
      {alumns.length > 0 ? (
        <AlumnTable alumns={alumns} onAddAlumns={(v) => setAlumns(v)} />
      ) : (
        'Sin alumnos. Vas a la ruina'
      )}
    </div>
  );
}
