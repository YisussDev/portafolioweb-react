import React from 'react'
import '../estilos/NavBar.css'
import logojp from '../imagenes/logo.png'
import perfil from '../imagenes/perfil.png'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'



const NavBar = (props) => {
  return (
    <div id='Navbar'>
      <button onClick={props.abrirM}><FontAwesomeIcon icon={faCode} /></button>
      <motion.div
      transition={{repeat: Infinity, duration: 10}}
      animate = {{rotate: [0, 360]}}
      >
        <img src={logojp} id='logo' alt="" />
      </motion.div>
      <span><img src={perfil} alt="" /></span>
    </div>
  )
}

export default NavBar