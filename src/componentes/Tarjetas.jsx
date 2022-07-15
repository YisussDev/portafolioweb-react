import React from 'react'
import '../estilos/Tarjetas.css'

const Tarjetas = (props) => {
  return (
  <div id='container_tarjetass'>
    <div id='container_tarjetas'>
        <img src={props.img} alt="" />
    </div>
    
        <h3>{props.nombre}</h3>
        <a href={props.linkweb} target='_blank' rel="noopener noreferrer"><button>En línea</button></a>
        <a href={props.linkgit} target='_blank' rel="noopener noreferrer"><button>Github</button></a>
    
    </div>
  )
}

export default Tarjetas