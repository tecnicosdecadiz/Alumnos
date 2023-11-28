import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

export default function EditAlumn(props) {
  const { index, alumn, alumns, onAddAlumns } = props;
  const [validationSchema] = useState(
    Yup.object().shape({
      name: Yup.string().required('El campo no puede estar vacío'),
      surname: Yup.string().required('El campo no puede estar vacío'),
      age: Yup.number()
        // .typeError('La edad debe ser un número')
        .required('El campo no puede estar vacío'),
      // .min(18, 'La edad debe ser mayor o igual a 18')
      date: Yup.string()
        // .matches(
        //   /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
        //   'Formato de fecha inválido (dd-mm-yyyy)'
        // )
        .required('El campo no puede estar vacío'),
    })
  );

  const editAlumn = (values) => {
    let tempAlumns = [...alumns];

    tempAlumns[index].name = values.name;
    tempAlumns[index].surname = values.surname;
    tempAlumns[index].age = values.age;
    tempAlumns[index].course = values.course;
    tempAlumns[index].date = values.date;
    tempAlumns[index].note = values.note;
    tempAlumns[index].realized = values.realized;

    console.log('tempAlumns', tempAlumns);
    console.log('values', values);
    localStorage.setItem('alumns', JSON.stringify(tempAlumns));
    onAddAlumns(tempAlumns);
  };

  return (
    <>
      <h3
        className="ri-pencil-line"
        style={{ cursor: 'pointer' }}
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${index}`}
      ></h3>

      <Formik
        initialValues={{
          name: alumn.name,
          surname: alumn.surname,
          age: alumn.age,
          course: alumn.course,
          date: alumn.date,
          note: alumn.note,
          realized: alumn.realized,
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
        onSubmit={(values) => {
          // editAlumn(key, alumn, values);
          editAlumn(values);
        }}
      >
        {({ setFieldValue, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div
              className="modal fade"
              id={`exampleModal${index}`}
              // tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Actualizar alumno
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(v) => setFieldValue('name', v.target.value)}
                      />
                      <ErrorMessage message={errors.name} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Apellidos</label>
                      <Field
                        type="text"
                        name="surname"
                        className="form-control"
                        onChange={(v) =>
                          setFieldValue('surname', v.target.value)
                        }
                      />
                      <ErrorMessage message={errors.surname} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Edad</label>
                      <Field
                        type="number"
                        name="age"
                        className="form-control"
                        onChange={(v) => setFieldValue('age', v.target.value)}
                      />
                      <ErrorMessage message={errors.age} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Fecha de inscripción</label>
                      <Field
                        type="date"
                        name="date"
                        className="form-control"
                        onChange={(v) => setFieldValue('date', v.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Curso</label>
                      <Field
                        as="select"
                        name="course"
                        className="form-select"
                        onChange={(v) =>
                          setFieldValue('course', v.target.value)
                        }
                      >
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                      </Field>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nota Media</label>
                      <Field
                        type="number"
                        name="note"
                        className="form-control"
                        onChange={(v) => setFieldValue('note', v.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">% Curso Realizado</label>
                      <Field
                        name="realized"
                        className="form-control"
                        onChange={(v) =>
                          setFieldValue('realized', v.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
