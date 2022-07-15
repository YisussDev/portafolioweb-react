import React, { useState } from 'react'
import NavBar from './NavBar'
import { motion } from "framer-motion"
import '../estilos/Inicio.css'


const Inicio = (props) => {
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
      initial={{y:'-300%'}}
      transition={{duration: 1}}
      animate={{y:0}}>
      {props.presentacion}
      </motion.div>):null}
      {isOpenC?(<motion.div
      initial={{y:'-300%'}}
      transition={{duration: 1}}
      animate={{y:0}}>
      {props.proyecto}
      </motion.div>):null}
      

      </div>


    </div>
  )
}

export default Inicio