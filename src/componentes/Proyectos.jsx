import '../estilos/Proyectos.css'
import Tarjetas from './Tarjetas'
import consejos from '../imagenes/consejos.png'
import paises from '../imagenes/paises.png'
import listat from '../imagenes/listatareas.png'
import ecom from '../imagenes/ecommerce.png'

const Proyectos = () => {
  const proyectos = [
    {nombre: 'Ecommerce',
    linkweb: 'https://zippy-malasada-bd1acd.netlify.app/',
    linkgit: 'https://github.com/shgzjxd/ecommerce-react',
    img: ecom
    },
    {nombre: 'Países',
    linkweb: 'https://sensational-mochi-5a34ee.netlify.app/',
    linkgit: 'https://github.com/shgzjxd/countries-app',
    img: paises
    },
    {nombre: 'Consejos Ramdon',
    linkweb: 'https://precious-mermaid-5685a1.netlify.app/',
    linkgit: 'https://github.com/shgzjxd/consejos-random',
    img: consejos
    },
    {nombre: 'Lista de Tareas',
    linkweb: 'https://fastidious-sunflower-a3bb93.netlify.app/',
    linkgit: 'https://github.com/shgzjxd/lista-tareas',
    img: listat
    },
  ]


  return (
    <div id='proyectos'>
      {proyectos.map(datos => 
      <Tarjetas
      nombre = {datos.nombre}
      key={datos.linkweb}
      img={datos.img}
      linkweb={datos.linkweb}
      linkgit={datos.linkgit}
       />
      )}
    </div>
  )
}

export default Proyectos