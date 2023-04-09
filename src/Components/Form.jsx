import React from "react";
import { useState } from "react";
import "../index.css"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre , setNombre] = useState('');
    const [email , setEmail] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeEmail = (event)=>{
        setEmail(event.target.value)
    }

    const validarNombre = (name) => {
      return name.length > 5
    }
  
    const validarEmail = (email) => {
      let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      return validEmail.test(email)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        if (validarNombre(nombre) && validarEmail(email)) {
          setMensaje(true);
          return;
        } 
        else {
          setMensaje(false);
        }

    }

  return (
    <div>
       {mensaje ? <div>Gracias {nombre}!, te contactaremos cuando antes vía mail</div> : <div>Por favor verifique su información nuevamente</div>}
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='Ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <input type="email" placeholder='Ingrese su email'onChange={onChangeEmail} value={email}/>
        <button>Enviar</button>
    </form>
    </div>
  );
};

export default Form;