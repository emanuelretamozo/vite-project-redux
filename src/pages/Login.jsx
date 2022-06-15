import { useState, useEffect } from "react"  // un estado que va a tener este componente para manejar los datos del formulario
import { FaSignInAlt } from "react-icons/fa"

export default function Login() {
  const[formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData;

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
          <FaSignInAlt /> Entrar a la App
        </h1>
        <p>Por favor ingresa tus credenciales</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
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
            <button type="submit" className="btn btn-block">Agregar</button>
          </div>
        </form>
      </section>
    </>
  )
}