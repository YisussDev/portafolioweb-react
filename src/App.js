import './App.css';
import Inicio from './componentes/Inicio';
import Proyectos from './componentes/Proyectos';
import Presentacion from './componentes/Presentacion';

function App() {
  return (
    <div className="App">
      <Inicio 
      presentacion = {<Presentacion />
      }
      proyecto = {<Proyectos />}
      />
    </div>
  );
}

export default App;
