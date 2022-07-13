import React from 'react'
import '../estilos/Presentacion.css'
import perfiljp from '../imagenes/perfiljp.png'
import github from '../imagenes/github.png'
import instagram from '../imagenes/instagram.png'
import linkedin from '../imagenes/linkedin.png'
import react from '../imagenes/atom.png'
import js from '../imagenes/java-script.png'
import html from '../imagenes/html.png'
import css from '../imagenes/css-3.png'
import corel from '../imagenes/cdr.png'

const Presentacion = () => {
  return (
    <div id='presentacion'>
      <img src={perfiljp} alt="" />
      <div>
      <h2>Jesus A. Paguay Naranjo</h2>
      <h4>Desarrollador FrontEnd React.js</h4>
      <p>Estudiante de séptimo semestre de Ingeniería Electrónica, apasionado por la
      tecnología y el mundo web, aprendiz autónomo del internet, mis hobbies son la programación, los
      videojuegos, la música y el dibujo. En constante aprendizaje y listo para enfrentar
      nuevos retos.</p>
      <h3>Contacto:</h3>
      <div id='red'>
        <a href="https://github.com/shgzjxd" target='_blank' rel="noopener noreferrer"><img src={github} alt="git" /></a>
        <a href="https://instagram.com/jesuspaguay" target='_blank' rel="noopener noreferrer"><img src={instagram} alt="git" /></a>
        <a href="https://www.linkedin.com/in/jesus-alberto-paguay-naranjo-684428234/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="git" /></a>
      </div>
      <h3>Habilidades:</h3>
      <div id='hab'>
        <img src={react} alt="react" title='react' />
        <img src={js} alt="js" title='JavaScript' />
        <img src={html} alt="html" title='html'/>
        <img src={css} alt="css" title='Css3'/>
        <img src={corel} alt="corel" title='CorelDraw'/>
      </div>
      </div>
      
    </div>
  )
}

export default Presentacion