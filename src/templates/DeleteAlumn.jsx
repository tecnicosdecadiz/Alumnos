export default function DeleteAlumn(props) {
  const { index, alumns, onUpdateAlumns } = props;

  const handleDeleteAlumn = () => {
    let tempAlumns = [...alumns];
 
    tempAlumns.splice(index, 1);

    localStorage.setItem('alumns', JSON.stringify(tempAlumns));
    onUpdateAlumns();
  };

  return (
    <>
      <h3 className="ri-delete-bin-line" style={{cursor: 'pointer'}} onClick={() => handleDeleteAlumn()}></h3>
    </>
  );
}
