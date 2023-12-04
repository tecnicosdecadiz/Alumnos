import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

export default function AddAlumn(props) {
  const { alumns, onAddAlumns } = props;
  const [validationSchema] = useState(
    Yup.object().shape({
      name: Yup.string()
        .required('El campo no puede estar vacío')
        .min(3, 'Minimo 3 caracteres'),
      surname: Yup.string()
        .required('El campo no puede estar vacío')
        .min(3, 'Minimo 3 caracteres'),
      age: Yup.number()
        .required('El campo no puede estar vacío')
        .integer('Debe ser un número entero')
        .typeError('Debe ser un número')
        .min(18, 'Debe ser mayor o igual a 18 años'),
      date: Yup.date().required('El campo no puede estar vacío'),
      course: Yup.string().required('El campo no puede estar vacío'),
      note: Yup.number()
        .required('El campo no puede estar vacío')
        .typeError('Debe ser un número')
        .min(0, 'El numero no puede ser menor de 0')
        .max(10, 'El numero no puede ser menor de 10')
        .test('twoDecimal', 'Solo se permiten 2 decimales', function (value) {
          return /^[0-9]+(\.[0-9]{1,2})?$/.test(value);
        }),
      realized: Yup.number()
        .required('El campo no puede estar vacío')
        .integer('Debe ser un número entero')
        .typeError('Debe ser un número')
        .min(0, 'El numero no puede ser menor de 0')
        .max(100, 'El numero no puede ser menor de 10'),
    })
  );

  const addAlumn = (values) => {
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
          name: 'aaa',
          surname: 'aaa',
          age: '22',
          course: '1942',
          note: '2',
          date: '',
          realized: '2',
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
        onSubmit={(values) => addAlumn(values)}
      >
        {({ setFieldValue, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div
              className="modal fade"
              // className={`modal fade ${showAddModal ? 'show' : ''}`}
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
                    <div className="mb-1">
                      <label className="form-label">Nombre</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(v) => setFieldValue('name', v.target.value)}
                      />
                      <ErrorMessage message={errors.name} />
                    </div>
                    <div className="mb-1">
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
                    <div className="mb-1">
                      <label className="form-label">Edad</label>
                      <Field
                        // type="number"
                        name="age"
                        className="form-control"
                        onChange={(v) => setFieldValue('age', v.target.value)}
                      />
                      <ErrorMessage message={errors.age} />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Fecha de inscripción</label>
                      <Field
                        type="date"
                        name="date"
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        onChange={(v) => setFieldValue('date', v.target.value)}
                      />
                      <ErrorMessage message={errors.date} />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Curso</label>
                      <Field
                        as="select"
                        name="course"
                        className="form-select"
                        onChange={(v) =>
                          setFieldValue('course', v.target.value)
                        }
                      >
                        <option value="1942">1942</option>
                        <option value="1943">1943</option>
                        <option value="1944">1944</option>
                      </Field>
                      <ErrorMessage message={errors.course} />
                    </div>

                    <div className="mb-1">
                      <label className="form-label">Nota Media</label>
                      <Field
                        // type="number"
                        name="note"
                        className="form-control"
                        onChange={(v) => setFieldValue('note', v.target.value)}
                      />
                      <ErrorMessage message={errors.note} />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">% Curso Realizado</label>
                      <Field
                        // type="number"
                        name="realized"
                        className="form-control"
                        onChange={(v) =>
                          setFieldValue('realized', v.target.value)
                        }
                      />
                      <ErrorMessage message={errors.realized} />
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
