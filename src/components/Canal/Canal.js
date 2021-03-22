import React from 'react'
import './Canal.css';
import Avatar from '@material-ui/core/Avatar';

const Canal = ({canal, titulo, subs, descripcion}) => {
    return (
        <div className='channelrow'>
            <Avatar 
              className='channelrow__logo'
              alt={titulo}
              src={canal}
            />
            <div className="channelrow__text">
              <h4>{titulo}</h4>
              <p>{subs} Suscriptores</p>
              <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Canal
