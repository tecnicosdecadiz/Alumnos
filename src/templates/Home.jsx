import { useState } from 'react';
import AddAlumn from './AddAlumn';
import AlumnTable from './AlumnTable';
import _ from 'lodash';

export default function Home() {
  const [orderDirection, setOrderDirection] = useState('asc');
  const [orderType, setOrderType] = useState('surname');
  const [alumns, setAlumns] = useState(
    _.orderBy(JSON.parse(localStorage.getItem('alumns')), 'surname', 'asc') ||
      []
  );

  const handleSort = () => {
    let tempAlumns = _.orderBy(
      JSON.parse(localStorage.getItem('alumns')),
      [orderType],
      orderDirection
    );

    setAlumns(tempAlumns);
  };

  return (
    <div className="container mt-5">
      <AddAlumn
        alumns={alumns}
        onUpdateAlumns={() => handleSort()}
      />
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
                      value={orderType}
                      onClick={(v) => setOrderType(v.target.value)}
                    >
                      <option value="name">Nombre</option>
                      <option value="surname">Apellido</option>
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
                      value={orderDirection}
                    >
                      <option value="asc">Ascendente</option>
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
          <AlumnTable alumns={alumns} onUpdateAlumns={() => handleSort()} />
        </>
      ) : (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: '30vh' }}
        >
          <div className="card text-center" style={{ width: '18rem' }}>
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
