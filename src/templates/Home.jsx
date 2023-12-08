import { useState } from 'react';
import AddAlumn from './AddAlumn';
import AlumnTable from './AlumnTable';

export default function Home() {
  const [orderDirection, setOrderDirection] = useState('asc');
  const [orderType, setOrderType] = useState('surname');
  const [alumns, setAlumns] = useState(
    JSON.parse(localStorage.getItem('alumns')) || []
  );

  const handleSort = () => {
    const data = [...alumns].sort((a, b) => {
      switch (orderType) {
        case 'name':
          if (orderDirection === 'asc') return a.name.localeCompare(b.name);
          else return b.name.localeCompare(a.name);
        case 'surname':
          if (orderDirection === 'asc')
            return a.surname.localeCompare(b.surname);
          else return b.surname.localeCompare(a.surname);
        case 'age':
          if (orderDirection === 'asc') return a.age.localeCompare(b.age);
          else return b.age.localeCompare(a.age);
        case 'course':
          if (orderDirection === 'asc') return a.course.localeCompare(b.course);
          else return b.course.localeCompare(a.course);
        case 'note':
          if (orderDirection === 'asc') return a.note.localeCompare(b.note);
          else return b.note.localeCompare(a.note);
        case 'date':
          if (orderDirection === 'asc') return a.date.localeCompare(b.date);
          else return b.date.localeCompare(a.date);
        case 'realized':
          if (orderDirection === 'asc')
            return a.realized.localeCompare(b.realized);
          else return b.realized.localeCompare(a.realized);
      }
    });

    setAlumns(data);
  };

  // if (alumns)
  return (
    <div className="container mt-5">
      <AddAlumn alumns={alumns} onAddAlumns={(values) => setAlumns(values)} />
      {alumns?.length > 0 ? (
        <>
          <div className="border mt-3">
            <div className="p-3">
              <h3>Filtros duodenales</h3>
              <div className="row mt-2">
                <div className="col-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Tipo de filtro
                    </span>
                    <select
                      className="form-control"
                      onClick={(v) => setOrderType(v.target.value)}
                    >
                      <option value="name">Nombre</option>
                      <option value="surname" selected>
                        Apellido
                      </option>
                      <option value="age">Edad</option>
                      <option value="course">Curso</option>
                      <option value="note">Nota media</option>
                      <option value="date">Fecha</option>
                      <option value="realized">Realizado</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Orden
                    </span>
                    <select
                      className="form-control"
                      onClick={(v) => setOrderDirection(v.target.value)}
                    >
                      <option value="asc" selected>
                        Ascendente
                      </option>
                      <option value="desc">Descendente</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleSort()}
                  >
                    Filtrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <AlumnTable alumns={alumns} onAddAlumns={(v) => setAlumns(v)} />
        </>
      ) : (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: '30vh' }}
        >
          {/* La clase 'container' proporciona un ancho máximo */}
          <div className="card text-center" style={{ width: '18rem' }}>
            {/* Contenido del card */}
            <div className="card-body">
              <h5 className="card-title">ATENCIÓN</h5>
              <p className="card-text">Eres super pobre, no tienes alumnos.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
