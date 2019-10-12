import "./scss/main.scss";
import { gretting } from "./js/modules/example";
import Person from "./js/modules/person";
import Users from "./js/modules/users";
import Catalina from "./img/catalina.jpg";

const App = document.getElementById("root");
const img = document.createElement("img");
img.src = Catalina;

let h1 = document.createElement("h1");
h1.textContent = "Webpack";

App.appendChild(h1);
//App.appendChild(img)

console.log(gretting("😄 Listo para usar Webpack kit"));
const users2 = [
  {
    "Directorio 👇": "src",
    "🗂": "js,scss,img",
    Edita: "su contenido y crea el tuyo"
  }
];

console.table(users2);

const p = new Person("dev", 21);
console.log(p.getDataPerson());
const a = new Users();
console.log(gretting("Ejemplo de consumo de datos de un 🤣 API Fake"));
a.getData();
