import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

export default function DeleteAlumn(props) {
  const { index, alumns, onAddAlumns } = props;

  const handleDeleteAlumn = () => {
    let tempAlumns = [...alumns];
 
    tempAlumns.splice(index, 1);

    localStorage.setItem('alumns', JSON.stringify(tempAlumns));
    onAddAlumns(tempAlumns);
  };

  return (
    <>
      <h3 className="ri-delete-bin-line" style={{cursor: 'pointer'}} onClick={() => handleDeleteAlumn()}></h3>
    </>
  );
}
