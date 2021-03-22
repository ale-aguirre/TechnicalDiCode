import React from 'react';
import './VideoRow.css';

const VideoFiltrado = ({vistas, descripcion, fecha, canal, titulo, imagen}) => {
    return (
        <div className='videorow'>
          <img src={imagen} alt="" />
          <div className="videorow__text">
              <h3>{titulo}</h3>
              <p className='videorow__headline'>
                {canal} • {vistas} vistas • {fecha}
              </p>
              <p className='videorow__description'>
                {descripcion}
              </p>
          </div>
        </div>
    )
}

export default VideoFiltrado;
