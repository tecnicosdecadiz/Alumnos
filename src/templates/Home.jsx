import { useState } from 'react';
import AddAlumn from './AddAlumn';
import AlumnTable from './AlumnTable';

export default function Home() {
  const [order, setOrder] = useState('asc');
  const [oldType, setOldType] = useState('surname');
  // const [alumns, setAlumns] = useState(handleSort(oldType, order));
  const [alumns, setAlumns] = useState(
    JSON.parse(localStorage.getItem('alumns'))
  );
  

  const handleSort = (type, order) => {
    if (type !== oldType) {
      console.log(type, order);
      const data = [...alumns].sort((a, b) => {
        switch (type) {
          case 'name':
            if (order === 'asc') return a.name.localeCompare(b.name);
            else return b.name.localeCompare(a.name);
          case 'surname':
            if (order === 'asc') return a.surname.localeCompare(b.surname);
            else return b.surname.localeCompare(a.surname);
          case 'age':
            if (order === 'asc') return a.age.localeCompare(b.age);
            else return b.age.localeCompare(a.age);
          case 'course':
            if (order === 'asc') return a.course.localeCompare(b.course);
            else return b.course.localeCompare(a.course);
          case 'note':
            if (order === 'asc') return a.note.localeCompare(b.note);
            else return b.note.localeCompare(a.note);
          case 'date':
            if (order === 'asc') return a.date.localeCompare(b.date);
            else return b.date.localeCompare(a.date);
          case 'realized':
            if (order === 'asc') return a.realized.localeCompare(b.realized);
            else return b.realized.localeCompare(a.realized);
        }
      });
      setOldType(type);
      setAlumns(data);
    }
  };

  if (alumns)
    return (
      <div className="container mt-5">
        {alumns.length > 0 && (
          <div className="border">
            <div className="p-3">
              <h3>Filtros duodenales</h3>
              <div className="row mt-2">
                <div className="col-5">
                  <select
                    className="form-select"
                    onClick={(v) => handleSort(v.target.value, order)}
                  >
                    <option>Seleccione tipo de orden</option>
                    <option value="name">Nombre</option>
                    <option value="surname" selected>Apellido</option>
                    <option value="age">Edad</option>
                    <option value="course">Curso</option>
                    <option value="note">Nota media</option>
                    <option value="date">Fecha</option>
                    <option value="realized">Realizado</option>
                  </select>

                  <select
                    className="form-select mt-2 mb-3"
                    onClick={(v) => setOrder(v.target.value)}
                  >
                    <option>Seleccione orden</option>
                    <option value="asc" selected>Ascendente</option>
                    <option value="desc">Descendente</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        <AddAlumn alumns={alumns} onAddAlumns={(values) => setAlumns(values)} />
        {alumns.length > 0 ? (
          <AlumnTable alumns={alumns} onAddAlumns={(v) => setAlumns(v)} />
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
                <p className="card-text">
                  Eres super pobre, no tienes alumnos.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
