// install react-router-dom:        "npm i react-router-dom"
// react-router: libreria para entornos moviles
// react-router-dom: libreria para el navegador
import { useState, useEffect } from "react"  // un estado que va a tener este componente para manejar los datos del formulario
import { FaUser } from "react-icons/fa"

export default function Register() {
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData;

  const onChange = ( e ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = ( e ) => {
    e.preventDefault();
    console.log(formData);
  } 

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Registrar
        </h1>
        <p>Por favor crea un nuevo usuario</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text"
              id="name"
              name="name"
              className="form-control" 
              value={name}  //ancla su valor al estado
              placeholder="teclea tu nombre" 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="email"
              name="email"
              className="form-control" 
              value={email} 
              placeholder="teclea tu email" 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              id="password"
              name="password"
              className="form-control" 
              value={password} 
              placeholder="teclea tu contraseña" 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              id="password2"
              name="password2"
              className="form-control" 
              value={password2} 
              placeholder="confirma tu contraseña" 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Agregar</button>
          </div>
        </form>
      </section>
    </>
  )
}

