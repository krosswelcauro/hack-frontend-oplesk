import React from 'react'
import '../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string().email('Correo electronico invalido').matches(/@[^.]*\./).required("El correo electronico es requerido"),
  age: Yup.number().required("La edad es requerida").positive().integer()
})

export function UserForm({user, onSubmit}) {
  return (
    <Formik
      initialValues={{
        name: user ? user.name : '',
        email: user ? user.email : '',
        age: user ? user.age : ''
      }}
      validationSchema={FormSchema}
      onSubmit={onSubmit}
    >

      {({isSubmitting}) => (

        <div className='login'>
        <div className='form-container'> 
          <Form className="form">
              <h2>{ user ? "" : "Registrar usuario" }</h2>
              <label htmlFor="name" className='label'>Nombre</label>
              <Field name='name' type='text' className="input input-email"></Field>
              <ErrorMessage name='name' component='div' className='message-error'></ErrorMessage>

              <label htmlFor="email" className='label'>Correo electronico</label>
              <Field name='email' type='email' className="input input-email"></Field>
              <ErrorMessage name='email' component='div' className='message-error'></ErrorMessage>

              <label htmlFor="age" className='label'>Edad</label>
              <Field name='age' type='number' className="input input-email"></Field>
              <ErrorMessage name='age' component='div' className='message-error'></ErrorMessage>

            <button type='submit' disabled={isSubmitting} className="primary-button login-button">
              { user ? "Guardar" : "Registrar" }
            </button>

          </Form>
        </div>

        </div>


      )}


    </Formik>
  );
}
