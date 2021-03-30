import React from "react";
import Canal from '../Canal/Canal'

const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneIcon />
        <h2>Filtro</h2>
      </div>
      <hr />
      <Canal
        key={Canal.id}
        imagen={Canal.imagen}
        titulo={Canal.titulo}
        subs={Canal.subs}
        descripcion={Canal.descripcion}
      />
      <hr />
    </div>
  );
};

export default SearchPage;
