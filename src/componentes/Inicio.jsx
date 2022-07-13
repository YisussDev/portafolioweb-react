import React, { useState } from 'react'
import NavBar from './NavBar'
import { motion } from "framer-motion"
import '../estilos/Inicio.css'
import Presentacion from './Presentacion'
import Proyectos from "./Proyectos";

const variantsC = {
  open: {y: 0 },
  closed: { y: '-100%'}
}
const variantsP = {
  open: {y: 0 },
  closed: {y: '-100%'}
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
      <div id='contenedor_secciones'>
      {isOpenP?(<motion.div
      initial={{y:'-200%'}}
      transition={{duration: 2}}
      animate={isOpenP ? "open" : "closed"}
      variants={variantsP} >
      <Presentacion />
      </motion.div>):null}
      {isOpenC?(<motion.div
      initial={{y:'-200%'}}
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