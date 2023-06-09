import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {

  const {state} = useContext(ContextGlobal);

  console.log(state);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state?.map((s)  => (
          <Card key={s.id} name={s.name} username={s.username} id={s.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;

