import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

export default function AddAlumn(props) {
  const { alumns, onAddAlumns } = props;
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

  const addAlumn = (values) => {
    console.log(values);
    let tempAlumns = [...alumns, values];
    localStorage.setItem('alumns', JSON.stringify(tempAlumns));
    onAddAlumns(tempAlumns);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Añadir Alumno
      </button>

      <Formik
        initialValues={{
          name: 'a',
          surname: 'a',
          age: '20',
          course: '',
          note: '',
          date: '',
          realized: 0,
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
        onSubmit={(values) => {
          addAlumn(values);
        }}
      >
        {({ setFieldValue, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div
              className="modal fade"
              id="exampleModal"
              // tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Añadir nuevo alumno
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
                        dateFormat="dd/MM/yyyy"
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
                      Añadir
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
