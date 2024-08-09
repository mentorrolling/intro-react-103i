import ImageApp from "./components/ImageApp";
import ListApp from "./components/ListApp";
import ParrafoApp from "./components/ParrafoApp";
import lenguajes from "./data/lenguajes.json";
import frameworks from "./data/frameworks.json";

const App = () => {
  console.log(lenguajes);
  //código de javascript
  const title = "Primer proyecto con React";
  const texto1 =
    "React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como Thumbnail, LikeButton, y Video. Luego combínalos para formar pantallas, páginas y aplicaciones.";
  const texto2 =
    "Sin importar si trabajas por tu cuenta o con otros miles de desarrolladores, utilizar React se siente igual. Está diseñado para permitirte combinar a la perfección componentes escritos por personas, equipos y organizaciones de forma independiente.";

  return (
    // código jsx
    <div>
      <h1>{title}</h1>
      <ParrafoApp texto={texto1} />
      <ParrafoApp texto={texto2} />
      <ListApp datos={lenguajes} subtitle={"Lenguajes"} />
      <ListApp datos={frameworks} subtitle={"Frameworks"} />

      <ImageApp />
    </div>
  );
};
// export {App}
export default App;
