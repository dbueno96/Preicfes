import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Navbar/Navbar';


ReactDOM.render(
    <>
      <Nav options={['Profesores','Cursos', 'Estudiantes', 'Programación', 'Convenios']}>

      </Nav>
    </>,
  document.getElementById('app')
);