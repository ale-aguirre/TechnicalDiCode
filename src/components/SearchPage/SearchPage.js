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
      {/* {videoRows.map((item) => {
        return (
          <Link key={item.videoId} to={`/video/${item.videoId}`}>
            <VideoRow
              title={item.title}
              image={item.image}
              views={item.views}
              timestamp={item.timestamp}
              channel={item.channel}
              description={item.description}
            />
          </Link>
        );
      })} */}
    </div>
  );
};

export default SearchPage;
