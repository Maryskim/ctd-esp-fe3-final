import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import {Link, link} from 'react-router-dom'

const Card = ({ name, username, id }) => {
  const {dispatch} = useContext(ContextGlobal);
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"add_fav" , payload:{name, username, id} })
  }

  return (
    <div className="card">
       <Link to={`/detail/${id}`}><div>

      <img src="../images/doctor.jpg" class= "card-img-top" alt="doctor"/>
      <div className="=card-body">
      <h5 className="card-title">{id} - {name}</h5>
      <p className="card-text">{username}</p>
      </div>
      </div>
      </Link>
      <button onClick={addFav} className="favButton"> Add fav </button>
      </div>

  );
};

export default Card;
