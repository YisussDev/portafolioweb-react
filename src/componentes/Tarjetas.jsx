import React from 'react'
import '../estilos/Tarjetas.css'

const Tarjetas = (props) => {
  return (
    <div id='tarjetas'>
        <img src={props.img} alt="" />
        <div id='botones'>
        <h2>{props.nombre}</h2>
        <a href={props.linkweb} target='_blank' rel="noopener noreferrer"><button>En línea</button></a>
        <a href={props.linkgit} target='_blank' rel="noopener noreferrer"><button>Github</button></a>
        </div>
    </div>
  )
}

export default Tarjetas