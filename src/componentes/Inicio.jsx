import React, { useState } from 'react'
import BarraLateral from './BarraLateral'
import NavBar from './NavBar'
import { motion } from "framer-motion"
import '../estilos/Inicio.css'
import Presentacion from './Presentacion'
import Proyectos from "./Proyectos";

const variantsC = {
  open: { scale: 1, y: 0 , rotate: 0},
  closed: { scale: 0, y: '-100%', rotate: -90}
}
const variantsP = {
  open: { scale: 1, y: 0 , rotate: 0},
  closed: { scale: 0, y: '-100%', rotate: -90}
}

const Inicio = () => {
  const [isOpenC, setIsOpenC] = useState(false)
  const [isOpenP, setIsOpenP] = useState(true)

  const abrirC = () => {
    setIsOpenC(isOpenC => !isOpenC)
    setIsOpenP(isOpenP => !isOpenP)
  }

  return (
    <div>
      
			<NavBar 
      abrirM = {abrirC}
      />
      <BarraLateral />

      <div id='contenedor_secciones'>
      {isOpenP?(<motion.div
      initial={{y:'-100%', scale:0}}
      transition={{duration: 2}}
      animate={isOpenP ? "open" : "closed"}
      variants={variantsP} >
      <Presentacion />
      </motion.div>):null}
      {isOpenC?(<motion.div
      initial={{y:'-100%', scale:[0,0,0,1]}}
      transition={{duration: 2}}
      animate={isOpenC ? "open" : "closed"}
      variants={variantsC} >
      <Proyectos />
      </motion.div>):null}
      

      </div>


    </div>
  )
}

export default Inicio