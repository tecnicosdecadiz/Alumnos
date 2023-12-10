import EditAlumn from './EditAlumn';
import DeleteAlumn from './DeleteAlumn';
import RealizedBar from './RealizedBar';

export default function AlumnTable(props) {
  const { alumns, onUpdateAlumns } = props;

  function convertDate(date) {
    const arrayDate = date.split('-');
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
  }

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Edad</th>
          <th scope="col">Curso</th>
          <th scope="col">Fecha de inscripción</th>
          <th scope="col">Nota Media</th>
          <th scope="col">% Realizado</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {alumns?.map((alumn, i) => (
          <tr key={i}>
            <td>{alumn.name}</td>
            <td>{alumn.surname}</td>
            <td>{alumn.age}</td>
            <td>{alumn.course}</td>
            <td>{convertDate(alumn.date)}</td>
            <td>{alumn.note}</td>
            <td>
              <RealizedBar realized={alumn.realized} />
            </td>
            <td className="d-inline-flex pointer">
              <EditAlumn
                index={i}
                alumns={alumns}
                alumn={alumn}
                onUpdateAlumns={(v) => onUpdateAlumns(v)}
              />
              <DeleteAlumn
                index={i}
                alumns={alumns}
                onUpdateAlumns={(v) => onUpdateAlumns(v)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
