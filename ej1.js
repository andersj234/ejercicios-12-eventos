let sistemaSolar = [
  {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
];
  
  let planet1 = window.prompt("Introduce un planeta: ").toLowerCase();
  let planet2 = window.prompt("Introduce otro planeta: ").toLowerCase();
  let planet3 = window.prompt("Introduce otro planeta más: ").toLowerCase();

  let parrafo = "";
  
  
  if (nombreExiste(planet1) && nombreExiste(planet2) && nombreExiste(planet3) && repetido(planet1, planet2, planet3)) {
    for (i = 0; i < sistemaSolar.length; i++) {
      if (
        sistemaSolar[i].nombre === planet1 ||
        sistemaSolar[i].nombre === planet2 ||
        sistemaSolar[i].nombre === planet3
      ) {
        parrafo += `
          <div class="card" id="planeta${i}">
            <img src="${sistemaSolar[i].imagen}" alt="imagen de ${sistemaSolar[i].nombre}" />
              <div class="container">
                <h1>${sistemaSolar[i].nombre}</h1>
                <p>Temperatura: ${sistemaSolar[i].temperatura}ºC</p>
                <p style="color:${sistemaSolar[i].fondo}">Color: ${sistemaSolar[i].color}</p>
                <button onclick="boton(${i})">cambiar color
                </button>
              </div>
          </div>
          `;
      }
    }
  }
  
  function nombreExiste(nombre){
    let respuesta;
    for(i =0; i< sistemaSolar.length; i++){
      if(nombre === sistemaSolar[i].nombre){
        respuesta = true;
        break;
      }else{
        respuesta = false;
      }
    } return respuesta;
  }

  function repetido(planet1, planet2, planet3){
    let repetidos;
    planet1 == planet2 || planet2 == planet3 || planet1 == planet3
    ? (repetidos = false)
    : (repetidos = true);
    return repetidos;
  }
   
  function boton(i){
    document.getElementById("planeta"+i.toString()).style.backgroundColor = sistemaSolar[i].fondo
  }
  document.getElementById("div").innerHTML = parrafo;
