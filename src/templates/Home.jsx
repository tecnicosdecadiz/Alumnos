import { useEffect, useState } from 'react';
import AddAlumn from './AddAlumn';
import AlumnTable from './AlumnTable';

export default function Home() {
  const [alumns, setAlumns] = useState(JSON.parse(localStorage.getItem('alumns'))
  );

  return (
    <div className="container mt-5">
      <AddAlumn alumns={alumns} onAddAlumns={(values) => setAlumns(values)} />

      {alumns.length > 0 ? (
        <AlumnTable alumns={alumns} onAddAlumns={(v) => setAlumns(v)} />
      ) : (
        'Sin alumnos. Vas a la ruina'
      )}
    </div>
  );
}
