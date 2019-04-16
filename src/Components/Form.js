import React, { Component } from 'react';

class Form extends Component {
  render(){
    return(
      <div>
       <h1>Registro:</h1>
       <form>
        <div>
          <label>nombre: </label>
          <input name="name"/>
        </div>
        <div>
          <label>apellido: </label>
          <input name="lastname"/>
        </div>
        <div>
          <label>Fecha de Cumpleanios: </label>
          <input name="email"/>
        </div>
        <div>
          <label>correo Eletronico: </label>
          <input name="email"/>
        </div>
        <div>
          <label>contrasena: </label>
          <input name="contrasena" type="password"/>
        </div>
        <button>Registrarse</button>
       </form>
     </div>
    )
  }
}

export default Form;
